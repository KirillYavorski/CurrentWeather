var path = require('path');
var webpack = require('webpack');
var resolve = require('resolve');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    entry: './src/scripts/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node.modules/],
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }]
        }, {
            test: /\.scss$/,
            use: extractPlugin.extract({
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [
        extractPlugin
    ]
};