const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const dev = {
  mode: 'development',
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
    publicPath: '/',
    proxy: {
      '/api': {
        target: 'http:127.0.0.1:5000/api/',
        pathRewrite: {'^/api': ''},
        changeOrigin: true,
        secure: false
      }
    }
  },
}

module.exports = merge(common, dev)