const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	module: {
		loaders: [{
			test: /\.es6$/,
			loaders: ["babel-loader"],
			include: __dirname,
			exclude: "/node_modules/"
		}]
	},
	context: path.resolve(__dirname, "./src"),
	entry: {
		get: "./get/index.es6"
	},
	output: {
		path: path.join(__dirname, ".webpack"),
		filename: "[name].js",
		libraryTarget: "commonjs"
	},
	externals: [nodeExternals()],
	target: "node"
};
