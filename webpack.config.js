// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
module.exports = {
    mode: 'development', // 开发模式
    entry: ["@babel/polyfill", path.resolve(__dirname, './src/index.js')],    // 入口文件
    devServer: {
        port: 8989,
        hot: true,
        open: true,
        // openPage: 'index.html', // 指定默认启动浏览器时打开的页面
        contentBase: path.join(__dirname, 'dist'),
    },
    output: {
        filename: 'build.js',      // 打包后的文件名称
        path: path.resolve(__dirname, './dist'),  // 打包后的目录
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] // 从右向左解析原则
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css",
        })
    ],

}
