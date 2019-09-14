const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueloaderPlugin = require('vue-loader/lib/plugin')

module.exports =  {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, './src/main.js')
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },{
      test: /\.css$/,
      use: [
        // 生产环境下提取css
        {
          loader: MiniCssExtractPlugin.loader,
        }, 
        'css-loader'
      ]
    },{
      test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
      loader: 'url-loader',
      options: {
        limit: 1024
      }
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000, 
    publicPath: '/'
  },
  plugins: [
    //清空dist目录
    new CleanWebpackPlugin({ path: './dist' }),
    // 生成html5文件
    new HtmlWebpackPlugin({ title: 'vue-shop', template: path.resolve(__dirname, './public/index.html')}),
    // 抽取css
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false
    }),
    // 使用vue插件，将其他定义过的规则复制到.vue文件中
    new VueloaderPlugin() 
  ],
}