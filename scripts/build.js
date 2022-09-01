const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const distDir = path.resolve(__dirname, "../dist");

console.log("Cleaning dist directory...");

for (const filename of fs.readdirSync(distDir)) {
    if (filename.includes("vendor")) {
        continue;
    }

    fs.unlinkSync(path.join(distDir, filename));
}

console.log("Building with webpack...");

const args = process.argv.slice(2);
exec(`npx webpack ${args.join(" ")}`, (error, stdout, stderr) => {
    if (error) {
        console.error(error.message);
        return;
    }
    if (stderr) {
        console.error(stderr);
        return;
    }

    if (stdout) {
        console.log(stdout);
    }

    console.log("Saving files info in plugin.json...");

    const pluginJSONPath = path.resolve(__dirname, "../plugin.json");

    const pluginInfo = JSON.parse(fs.readFileSync(pluginJSONPath));
    const files = [];
    for (const filename of fs.readdirSync(distDir)) {
        if (filename !== "main.js" && filename.endsWith(".js")) {
            files.push(filename);
        }
    }

    pluginInfo.files = files;
    fs.writeFileSync(pluginJSONPath, JSON.stringify(pluginInfo, null, 2));
});
