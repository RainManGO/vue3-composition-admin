/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-05 17:11:54
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  env: {
    development: {
      // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
      // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
      // https://panjiachen.github.io/vue-element-admin-site/guide/advanced/lazy-loading.html
      plugins: [
        'dynamic-import-node'
        // [
        //   'component',
        //   {
        //     libraryName: 'element-plus',
        //     styleLibraryName: 'theme-chalk'
        //   }
        // ]
      ]
    }
  }
}
