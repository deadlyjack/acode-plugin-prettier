self.onmessage = (e) => {
    const { id, code, cursorOptions, action, scriptUrl } = e.data;
    if (action === "load script") {
        importScripts(scriptUrl);
        self.postMessage({ action: "script loaded" });
        return;
    }

    const { prettier, plugins } = self.acodePluginPrettier;
    cursorOptions.plugins = plugins;
    const res = prettier.formatWithCursor(code, cursorOptions);
    self.postMessage({ id, action: "code format", res });
};
