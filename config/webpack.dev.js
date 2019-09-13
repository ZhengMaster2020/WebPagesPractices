const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const dev = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 3000,   
    publicPath: '/'
  },
}

module.exports = merge(common, dev)