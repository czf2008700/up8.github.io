const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/main.ts',
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/dist', // 将输出放到dist文件夹
    filename: 'app-[hash].js'
  },
  devServer: {
    contentBase: './dist',
    host: '127.0.0.1',
    port: 8080,
    inline: true,
    compress: false
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ExtractTextPlugin.extract({
          use: ['css-loader'], // 转换 .css 文件需要使用的 Loader
        }),
      },
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader'],
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html" //new 一个这个插件的实例，并传入相关的参数
        }),
    new ExtractTextPlugin({
      filename: `[name]_[contenthash:8].css` // 从 .js 文件中提取出来的 .css 文件的名称
    }),
  ],
}