var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            }, {
                test: /\.(woff|woff2)$/,
                loader: "url?limit=10000&minetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }, {
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            }, {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    node: {
        fs: "empty"
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};