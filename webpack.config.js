const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

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
        new CleanWebpackPlugin()
    ],
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(scss|snss)$/,
                use: ['style-loader','css-loader', 'sass-loader']
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
