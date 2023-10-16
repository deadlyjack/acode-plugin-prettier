import prettier from "prettier/standalone";
import prettierPlugins from './prettierPlugins';


self.onmessage = async (e) => {
    const { id, code, cursorOptions, action, scriptUrl } = e.data;
    if (action === "load script") {
        importScripts(scriptUrl);
        self.postMessage({ action: "script loaded" });
        return;
    }

    cursorOptions.plugins = prettierPlugins;
    const res = await prettier.formatWithCursor(code, cursorOptions);
    self.postMessage({ id, action: "code format", res });
};
