var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    OpenBrowserPlugin = require('open-browser-webpack-plugin');

var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        vendor: './sample/vendor.ts',
        app: './sample/index.ts'
    },
    target: 'web',
    output: {
        path: path.join(__dirname, './build'),
        publicPath: '/build/',
        filename: '[name]-[chunkhash].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer : {
        port: 8080
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({ template: "sample/index.html" }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080/build/index.html' })
    ],
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.ts$/,
                loaders: ['ts-loader?configFileName=./sample/tsconfig.json']

            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: /node_modules/,
            }
        ]
    }
};

module.exports = config;