module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
}