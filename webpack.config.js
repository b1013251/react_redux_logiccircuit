var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        context: path.join(__dirname, 'src'),
        entry: {
            app: './app.js'
        },
        output: {
            path: __dirname + '/public/js',
            filename: '[name].js'
        },
        module: {
            loaders: [
                {
                    test: /\.js[x]?$/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                    query:{
                        presets: ['react', 'es2015']
                    }
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        watchOptions: {
            poll: true
        }
    }
];
