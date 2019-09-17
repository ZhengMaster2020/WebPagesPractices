# vue-shop项目使用webpack从零搭建电商项目

##安装包

webpack
webpack-cli
webpack-merge

Loader:
+ babel:
  + @babel/core 
  + @babel/preset-env
  + babel-loader
  + @babel/polyfill
  + @babel/plugin-transform-runtime

+ css-loader
+ style-loader
+ file-loader
+ url-loader

+ Vue
  + vue
  + vuex
  + vue-router
  + vue-loader
  + vue-style-loader
  + vue-template-compiler
 

plugins:
+ clean-webpack-plugin
+ html-webpack-plugin
+ mini-css-extract-plugin


# path.join() 与 path.resolve()的区别？

# url-loader 与 file-loader的区别？
+ file-loader： [https://github.com/webpack-contrib/file-loader](https://github.com/webpack-contrib/file-loader)

## webpack配置生产环境与开发环境

1. 前端用户登录Token认证
2. 购物车数字响应式显示
3. 图片显示的问题