const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "./style/[name].css",
          })
    ],
    module: {
        rules:[
            {
                test: /\.(scss|snss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            { 
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i, 
                type: 'asset/resource' 
            },
            { 
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, 
                type: 'asset/inline' 
            }
        ]
    }
}
