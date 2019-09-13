const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const dev = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 3000,   
    publicPath: '/'
  },
}

module.exports = merge(common, dev)