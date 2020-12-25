/*
 * @Description: 
 * @Author: ZY
 * @Date: 2020-12-09 11:15:59
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-09 11:44:48
 */
const vueDefaultConfig = {
    publicPath: '',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: true,
    transpileDependencies: ['vue-echarts', 'resize-detector'],
    title: 'vue3-ts-composition-admin-template',
    titleSeparator: ' - ',
    titleReverse: false,
    devPort: '9999',
    version: '1.0',
    abbreviation: 'vt2at',
    providePlugin: {},
    build7z: false,
    startMessage:'欢迎使用vue3-ts-composition-admin-template,使用composition API和TS 玩转最潮技术'
}

module.exports = vueDefaultConfig
  