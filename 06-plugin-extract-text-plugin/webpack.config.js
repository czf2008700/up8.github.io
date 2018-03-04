const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname + '/dist', // 将输出放到dist文件夹
    filename: 'app-[hash].js'
  },
  module: {
    rules: [
      { test: /\.css$/, 
        use: ExtractTextPlugin.extract({
          use: ['css-loader'], // 转换 .css 文件需要使用的 Loader
        }),
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
            template: __dirname + "/index.html" //new 一个这个插件的实例，并传入相关的参数
        }),
    new ExtractTextPlugin({
      filename: `[name]_[contenthash:8].css` // 从 .js 文件中提取出来的 .css 文件的名称
    }),
  ],
}