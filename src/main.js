import prettier from "prettier/standalone";
import pretterParserHTML from "prettier/parser-html";
import prettierParserBabel from "prettier/parser-babel";
import prettierParserGraphql from "prettier/parser-graphql";
import prettierParserAngular from "prettier/parser-angular";
import prettierParserAspree from "prettier/parser-espree";
import prettierParserFlow from "prettier/parser-flow";
import prettierParserGlimmer from "prettier/parser-glimmer";
import prettierParserMd from "prettier/parser-markdown";
import prettierParserMeriyah from "prettier/parser-meriyah";
import prettierParserPostcss from "prettier/parser-postcss";
import prettierParserTypescript from "prettier/parser-typescript";
import prettierParserYaml from "prettier/parser-yaml";
import plugin from '../plugin.json';

const plugins = [
    prettierParserBabel,
    prettierParserGraphql,
    prettierParserAngular,
    prettierParserAspree,
    prettierParserFlow,
    prettierParserGlimmer,
    pretterParserHTML,
    prettierParserMd,
    prettierParserMeriyah,
    prettierParserPostcss,
    prettierParserTypescript,
    prettierParserYaml,
];

const pluginId = plugin.id;

class Prettier {
    constructor() {
        this.run = this.run.bind(this);
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
        const parser = Prettier.inferParser(activeFile.name);
        const res = prettier.formatWithCursor(code, {
            parser,
            cursorOffset: this.#cursorPosTocursorOffset(cursorPos),
            filepath: activeFile.name,
            plugins,
        });
        editor.setValue(res.formatted);
        const { row, column } = this.#cursorOffsetTocursorPos(res.cursorOffset);
        editor.gotoLine(row + 1, column - 1);
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
}

if (window.acode) {
    const prettier = new Prettier();
    acode.setPluginInit(pluginId, (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
        if (!baseUrl.endsWith("/")) {
            baseUrl += "/";
        }
        prettier.baseUrl = baseUrl;
        prettier.init($page, cacheFile, cacheFileUrl);
    });
    acode.setPluginUnmount(pluginId, () => {
        prettier.destroy();
    });
}
