# vue-shop项目使用webpack从零搭建简单电商项目

使用webpack构建Vue的项目开发环境，

## 一、 初始化项目
1. 新建文件夹名字为`vue-shop`,然后在该文件夹下打开命令行工具执行`npm init -y `，生成一份**package.json**文件

```bash
$ npm init -y
Wrote to C:\Users\zhengmaster\Desktop\Vue\vue-shop\package.json:

{
  "name": "vue-shop",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

2. 在vue-shop文件下新建`public`、`src`文件夹以及**README.md**文件



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
4. webpack配置多页面开发