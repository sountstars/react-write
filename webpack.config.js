// webpack.config.js

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const svgRegex = /\.svg(\?v=\d+\.\d+\.\d+)?$/;
const svgOptions = {
  limit: 10000,
  minetype: "image/svg+xml"
};
const imageOptions = {
  limit: 10000
};
console.log("webpack :1 ", webpack);
module.exports = {
  mode: "development", // 开发模式
  entry: ["@babel/polyfill", path.resolve(__dirname, "./src/index.jsx")], // 入口文件
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    openPage: "index.html", // 指定默认启动浏览器时打开的页面
    contentBase: path.join(__dirname, "dist")
    // watchContentBase: true,
    // publicPath: '/',
    // historyApiFallback: true,
    // clientLogLevel: 'error',
  },
  output: {
    filename: "build.js", // 打包后的文件名称
    path: path.resolve(__dirname, "./dist") // 打包后的目录
    // publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          process.env.NODE_ENV === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          process.env.NODE_ENV === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "sass-loader"
        ],
        include: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loder"],
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["lodash"]
          }
        },
        exclude: /node_modules/
      },
      {
        test: svgRegex,
        loader: "url-loader",
        options: svgOptions
      },
      {
        test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
        loader: "url-loader",
        options: imageOptions
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
      title: "测试"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
