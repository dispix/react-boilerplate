'use strict'

const path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build/assets'),
    publicPath: '/assets'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../build')
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
