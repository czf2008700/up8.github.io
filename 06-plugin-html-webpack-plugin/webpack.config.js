const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app-[hash].js'
  },
  module: {
    rules: [
      { test: /\.css$/, 
        use: ['style-loader', 'css-loader?minimize'],
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
            template: __dirname + "/index.html"//new 一个这个插件的实例，并传入相关的参数
        })
  ],
}