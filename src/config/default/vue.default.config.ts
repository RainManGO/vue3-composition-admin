/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-08 10:04:39
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-08 15:21:15
 */

export interface VueConfig {
  // 开发以及部署时的URL，hash模式时在不确定二级目录名称的情况下建议使用""代表相对路径或者"/二级目录/"，history模式默认使用"/"或者"/二级目录/"
  publicPath?: string
  // 生产环境构建文件夹目录名
  outputDir?: string
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir?: string
  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave?: boolean
  // 进行编译的依赖
  transpileDependencies?: string[]
  // 默认的接口地址 如果是开发环境和生产环境走vab-mock-server，当然你也可以选择自己配置成需要的接口地址
  title?: string
  // 标题分隔符
  titleSeparator?: string
  // 标题反转
  titleReverse?: false
  // 版本号
  version?: string
  // 简写
  abbreviation?: string
  // 开发环境端口号
  devPort?: string
  // 需要自动注入并加载的模块
  providePlugin?: {}
  // npm run build时是否自动生成7z压缩包
  build7z?: boolean
  // 是否显示终端donation打印
  donation?: boolean
}

const _vueDefaultConfig: VueConfig = {
  publicPath: '',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  transpileDependencies: ['vue-echarts', 'resize-detector'],
  title: 'vue3-ts-antd-admin-template',
  titleSeparator: ' - ',
  titleReverse: false,
  devPort: '9999',
  version: '1.0',
  abbreviation: 'vt2at',
  providePlugin: {},
  build7z: false,
  donation: false
}

export default _vueDefaultConfig
