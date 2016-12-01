var config = require('./webpack.config'),
    webpack = require('webpack')
    HtmlWebpackPlugin = require("html-webpack-plugin");

config.devtool = undefined;

config.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({ template: "sample/index.html" }),
];

module.exports = config;