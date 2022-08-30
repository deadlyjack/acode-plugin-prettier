import plugin from "../plugin.json";

const pluginId = plugin.id;

class AcodePrettier {
    worker = null;
    workerInitialized = false;

    constructor() {
        this.run = this.run.bind(this);
    }

    async loadScript() {
        if (document.getElementById("prettier-vendor-script")) {
            return;
        }

        const $script = document.createElement("script");
        $script.id = "prettier-vendor-script";
        $script.src = acode.joinUrl(this.baseUrl, "vendor.js");
        return new Promise((resolve, reject) => {
            $script.onload = resolve;
            $script.onerror = reject;
        });
    }

    static inferParser(filename) {
        switch (filename.slice(filename.lastIndexOf(".") + 1)) {
            case "html":
            case "htm":
                return "html";

            case "css":
                return "css";

            case "scss":
                return "scss";

            case "less":
                return "less";

            case "js":
            case "cjs":
            case "es":
            case "mjs":
            case "jsx":
                return "babel";

            case "ts":
            case "tsx":
                return "typescript";

            case "vue":
                return "vue";

            case "json":
                return "json";

            case "hbs":
            case "handlebars":
                return "glimmer";

            case "md":
                return "markdown";

            case "yaml":
            case "yml":
                return "yaml";

            default:
                return null;
        }
    }

    async init() {
        if (typeof Worker !== undefined) {
            this.#initializeWorker();
        } else {
            await this.loadScript();
        }

        const config = appSettings.value[pluginId];
        const extensions = [
            "html",
            "htm",
            "css",
            "scss",
            "less",
            "js",
            "cjs",
            "es",
            "mjs",
            "jsx",
            "ts",
            "tsx",
            "vue",
            "json",
            "hbs",
            "handlebars",
            "md",
            "yaml",
            "yml",
        ];

        acode.registerFormatter(pluginId, extensions, this.run);
    }

    async run() {
        const { editor, activeFile } = editorManager;
        const code = editor.getValue();
        const cursorPos = editor.getCursorPosition();
        const parser = AcodePrettier.inferParser(activeFile.name);

        if (typeof Worker === undefined) {
            const { prettier, plugins } = window.acodePluginPrettier;
            const res = prettier.formatWithCursor(code, {
                parser,
                cursorOffset: this.#cursorPosTocursorOffset(cursorPos),
                filepath: activeFile.name,
                plugins,
            });
            editor.setValue(res.formatted);
            const { row, column } = this.#cursorOffsetTocursorPos(
                res.cursorOffset
            );
            editor.gotoLine(row + 1, column - 1);
            return;
        }

        this.worker.postMessage({
            id: activeFile.id,
            code,
            cursorOptions: {
                parser,
                cursorOffset: this.#cursorPosTocursorOffset(cursorPos),
                filepath: activeFile.name,
            },
        });
    }

    destroy() {
        acode.unregisterFormatter(plugin.id);
    }

    #cursorPosTocursorOffset(cursorPos) {
        let { row, column } = cursorPos;
        const { editor } = editorManager;
        const lines = editor.getValue().split("\n");
        for (let i = 0; i < row - 1; i++) {
            column += lines[i].length;
        }
        return column;
    }

    #cursorOffsetTocursorPos(cursorOffset) {
        const { editor } = editorManager;
        const lines = editor.getValue().split("\n");
        let row = 0;
        let column = 0;
        for (let i = 0; i < lines.length; i++) {
            if (column + lines[i].length >= cursorOffset) {
                row = i;
                column = cursorOffset - column;
                break;
            }
            column += lines[i].length;
        }
        return {
            row,
            column,
        };
    }

    #initializeWorker() {
        this.worker = new Worker(new URL("./worker.js", import.meta.url));
        this.worker.onmessage = (e) => {
            const { id, res, action } = e.data;
            if (action === "script loaded") {
                this.workerInitialized = true;
                return;
            }

            if (action === "code format") {
                const file = editorManager.getFile(id, "id");
                if (!file) return;

                const { session } = file;
                session.setValue(res.formatted);
                const { row, column } = this.#cursorOffsetTocursorPos(
                    res.cursorOffset
                );

                session.selection.moveCursorTo(row, column);
            }
        };

        this.worker.postMessage({
            action: "load script",
            scriptUrl: acode.joinUrl(this.baseUrl, "vendor.js"),
        });
    }
}

if (window.acode) {
    const prettier = new AcodePrettier();
    acode.setPluginInit(
        pluginId,
        (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
            if (!baseUrl.endsWith("/")) {
                baseUrl += "/";
            }
            prettier.baseUrl = baseUrl;
            prettier.init($page, cacheFile, cacheFileUrl);
        }
    );
    acode.setPluginUnmount(pluginId, () => {
        prettier.destroy();
    });
}
