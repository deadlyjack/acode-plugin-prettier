const path = require("path");

module.exports = (env, options) => {
    const { mode = "development" } = options;
    const rules = [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
        },
    ];

    const main = {
        mode,
        entry: {
            main: "./src/main.js",
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js",
            chunkFilename: "[name].js",
        },
        module: {
            rules,
        },
    };

    return [main];
};
