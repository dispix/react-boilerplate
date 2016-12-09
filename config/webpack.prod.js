'use strict'

const path = require('path')

module.exports = {
  context: path.join(__dirname),
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build/assets'),
    publicPath: '/assets'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['react', ['es2015', {'modules': false}]]
          }
        }]
      },
      {
        test: /\.json?$/,
        use: ['json-loader']
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
