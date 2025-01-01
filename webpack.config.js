const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'dist'),
	clean: true,
  },
  module: {
	rules: [
	  {
		test: /\.jsx?$/,
		exclude: /node_modules/,
		use: {
		  loader: 'babel-loader',
		},
	  },
	  {
		test: /\.css$/,
		use: ['style-loader', 'css-loader'],
	  },
	],
  },
  plugins: [
	new HtmlWebpackPlugin({
	  template: './src/index.html',
	}),
  ],
  resolve: {
	extensions: ['.js', '.jsx'],
  },
};