const { exec } = require('child_process');
const fs = require("fs");
const path = require("path");

module.exports = (env, options) => {
	const { mode = "development" } = options;

	if (mode === 'production') {
		// remove dist folder
		fs.rmdirSync(path.resolve(__dirname, "dist"), { recursive: true });
	}

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
			rules: [
				{
					test: /\.m?js$/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env'],
							},
						},
					],
				}
			],
		},
		plugins: [
			{
				apply: (compiler) => {
					compiler.hooks.afterDone.tap('pack-zip', () => {
						// run pack-zip.js
						exec('node .vscode/pack-zip.js', (err, stdout, stderr) => {
							if (err) {
								console.error(err);
								return;
							}
							console.log(stdout);
						});
					});
				}
			}
		],
	};

	return [main];
};
