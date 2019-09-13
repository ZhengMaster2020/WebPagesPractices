const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // 源代码映射
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
    new UglifyJSPlugin({
      sourceMap: true
    }),
    // 指定环境
    new  webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})