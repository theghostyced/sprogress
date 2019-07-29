const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'sprogress.min.js',
		path: path.resolve(__dirname, 'lib'),
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				exclude: /\/node_modules/,
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};
