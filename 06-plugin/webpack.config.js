const webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  module: {
    rules: [
      { test: /\.css$/, 
        use: ['style-loader', 'css-loader?minimize'],
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究')
  ],
}