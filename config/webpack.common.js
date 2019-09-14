const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueloaderPlugin = require('vue-loader/lib/plugin')

module.exports =  {
  mode: 'none',
  entry: {
    main: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    },{
      test:  /iview.src.*?js$/,
      loader: 'babel-loader'
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },{
      test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
      loader: 'url-loader',
      options: {
        limit: 1024
      }
    }]
  },
  plugins: [
    //清空dist目录
    new CleanWebpackPlugin({ path: '../dist' }),
    // 生成html5文件
    new HtmlWebpackPlugin({ title: 'vue-shop', template: path.resolve(__dirname, '../public/index.html')}),
    // 使用vue插件，将其他定义过的规则复制到.vue文件中
    new VueloaderPlugin() 
  ],
}