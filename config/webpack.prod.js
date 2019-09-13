const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    }]
  },
  plugins: [
    // 抽取css
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false
    }),
    //代码压缩 剔除没有应用的代码
    new UglifyJSPlugin()
  ]
})