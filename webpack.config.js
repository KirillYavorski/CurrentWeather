// var path = require('path');
// var webpack = require('webpack');
//
//
// module.exports = {
//     entry: './src/app.js',
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: 'main.bundle.js'
//     },
//     module: {
//         rules: [{
//             test: /\.js$/,
//             exclude: [/node.modules/],
//             use: [{
//                 loader: 'babel-loader',
//                 options: {
//                     presents: ['env']
//                 }
//             }]
//         }]
//     },
// }


var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
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
        }]

        // loaders: [
        //     {
        //         test: /\.js$/,
        //         loader: 'babel-loader',
        //         query: {
        //             presets: ['es2015']
        //         }
        //     }
        // ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};