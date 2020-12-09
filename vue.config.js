/*
 * @Description:配置文件
 * @Autor: ZY
 * @Date: 2020-12-07 11:41:22
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-09 11:48:36
 */
const { resolve } = require('path')
const path = require('path')
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const  {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  transpileDependencies,
  title,
  startMessage,
  abbreviation,
  devPort,
  providePlugin,
  build7z
} = require('./src/config/default/vue.custom.config')
module.exports = {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  transpileDependencies,
  devServer: {
    hot: true,
    port: devPort,
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  configureWebpack(){
    return {
      resolve:{
        alias:{
          '@':resolve('src'),
          '*':resolve(''),
          'Assets':resolve('src/assets')
        }
      },
      plugins:[
        new WebpackBar({
          name:title,
        })
      ]
    }
  }
}
