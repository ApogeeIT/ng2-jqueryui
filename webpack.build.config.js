var config = require('./webpack.config'),
    webpack = require('webpack')
    HtmlWebpackPlugin = require("html-webpack-plugin");

config.devtool = undefined;

config.entry = ['./sample/index.ts'];

config.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({ template: "sample/index.html" }),
];

module.exports = config;