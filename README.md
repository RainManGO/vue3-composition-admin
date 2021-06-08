<p align="center">
  <a href="https://github.com/rcyj-FED/vue3-composition-admin-docs" target="_blank">
    <img width="180" src="https://github.com/rcyj-FED/vue3-composition-admin-docs/blob/main/docs/.vuepress/public/icons/android-chrome-192x192.png" alt="logo">
  </a>
</p>


<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-3.0-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/element-plus/element-plus">
    <img src="https://img.shields.io/badge/element--plus-1.x-blue" alt="element-plus">
  </a>
  <a href="https://github.com/vuejs/vuex">
    <img src="https://img.shields.io/badge/vuex-4.0-brightgreen" alt="vuex">
  </a>
   <a href="https://github.com/intlify/vue-i18n-next">
    <img src="https://img.shields.io/badge/vue--i18n--next-9.0-brightgreen" alt="vue-i18n-next">
   </a>
   <a href="https://github.com/npm/npm">
    <img src="https://img.shields.io/badge/npm-6.1.8-blue" alt="npm">
   </a>
   <a href="https://gitter.im/vue3Admin/community">
    <img src="https://badges.gitter.im/Join%20Chat.svg" alt="gitter">
  </a>
</p>


> vue3-composition-admin 是一个管理端模板解决方案，它是基于vue3,ts和element-plus，项目都是以composition api风格编写。

## 简介

项目的基础版本出自于源于花裤衩大佬的 vue-element-admin。

版本：

vue2+js版本：[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

vue2+ts版本：[vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) 

vue3 发布之后，性能增强，速度vue2的倍数，打包体积都在减小（treeshaking），composition api 增加了项目可读性。

项目目的：

- 学习vue3+ts
- 保持 composition api 风格

在线demo演示地址：https://admin-tmpl-test.rencaiyoujia.cn/

## 相关项目

- 基于该项目[RuoYi-Vue3](https://github.com/rcyj-FED/RuoYi-Vue3) (后端路由案例)
- 微应用乾坤版本[RuoYi-Vue3-qinkun](https://github.com/RainManGO/RuoYi-Vue3-qiankun)
- 国内gitee版本 [vue3-composition-admin](https://gitee.com/codeZyZ_admin/vue3-composition-admin) 


### 功能

```text
- 用户管理
	- 登录（视频背景）
	- 注销
	
- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置
  - 二步登录

- 多环境发布 (对应serve,build)
  - dev
  - test
  - prod
  
- 全局功能
  - iconfont
  - 国际化多语言
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本

- Excel
  - 导出excel
  - 导入excel
  - 前端可视化excel
  - 导出zip

- 表格
  - 动态表格
  - 拖拽表格
  - 内联编辑

- 错误页面
  - 401
  - 404

- 組件
  - 头像上传
  - 返回顶部
  - 拖拽Dialog
  - 拖拽Select
  - 拖拽看板
  - 列表拖拽
  - Dropzone
  - Sticky
  - CountTo (to do)

- 综合实例
- 错误日志
- Dashboard
- 引导页
- ECharts 图表
- Clipboard(剪贴复制)
```



### 目录结构

```
admin-tmpl
├─ .env.dev.build     # 开发环境
├─ .env.dev.serve     # 开发本地本地
├─ .env.prod.build    # 生产环境
├─ .env.prod.serve    # 生产环境本地
├─ .env.test.build    # 测试环境
├─ .env.test.serve    # 测试环境本地
├─ .eslintrc.js       # eslint
├─ README.md          
├─ dist               # 打包dist
├─ mock               # mock服务
├─ public             # 静态资源
├─ src                # 源码
│  ├─ @types          # ts 声明
│  ├─ apis            # 接口请求
│  ├─ assets          # webpack打包的资源
│  ├─ components      # 公共组件
│  ├─ config          # 全部配置
│  ├─ constant        # 常量
│  ├─ directives      # 全局指令
│  ├─ layout          # 全局Layout
│  ├─ locales         # 国际化
│  ├─ model           # 全部model存放
│  ├─ plugins         # 插件
│  ├─ router          # 路由
│  ├─ store           # 全局store管理
│  ├─ styles          # 全局样式
│  ├─ utils           # 全局公共方法
│  └─ views           # 所有业务页面
├─ tsconfig.json      # ts 编译配置
└─ vue.config.js      # vue-cli 配置

```

## HighLight

项目均已最新技术实现，Vue3配套升级全家桶和涉及的插件组件等

项目采用技术:

- vue3 + composition api
- typescript3.9
- sass (dart sass)
- [echats5](https://github.com/apache/echarts)

vue next 系列:

- [element-plus](https://github.com/element-plus/element-plus)
- [vue-router-next](https://github.com/vuejs/vue-router-next)
- [vuex-4.0](https://github.com/vuejs/vuex)
- [vue-i18n-next](https://github.com/intlify/vue-i18n-next)


## Document

- [博客文档地址](https://blog.csdn.net/zy_flyway/category_6335128.html)
- [文档地址](https://rcyj-fed.github.io/vue3-composition-admin-docs/)
- [文档项目git地址](https://github.com/rcyj-FED/vue3-composition-admin-docs)


## Setup

项目主要是前端和mock server（node）

### 前后端都启动

```shell
  yarn
  yarn start
```


### 单独启动 Mock

后台模拟服务器和其他版本不同，采用koa2+Faker进行模拟。

- [Koa2](https://github.com/koajs/koa)
- [Faker](https://github.com/Marak/faker.js)

启动mock server:

```shell
    yarn mock
```

mock 需要部署到服务器，单独项目地址：https://github.com/rcyj-FED/admin-tmpl-mock
mock在线测试地址：https://admin-tmpl-mock-test.rencaiyoujia.cn/

### 单独启动 vue admin


```shell
    yarn  serve:dev
```

多环境命令查看package.json  script:

``` shell
    "serve:dev": "cross-env NODE_ENV=development dotenv -e .env.dev.serve vue-cli-service serve",
    "build:dev": "cross-env NODE_ENV=production  dotenv -e .env.dev.build vue-cli-service build",
    "serve:test": "cross-env NODE_ENV=development dotenv -e .env.test.serve vue-cli-service serve",
    "build:test": "cross-env NODE_ENV=production  dotenv -e .env.test.build vue-cli-service build",
    "serve:prod": "cross-env NODE_ENV=development dotenv -e .env.prod.serve vue-cli-service serve",
    "build:prod": "cross-env NODE_ENV=production  dotenv -e .env.prod.build vue-cli-service build",
```


### eslint

```shell
    yarn  lint
```

提交自动检测：

```json
 "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "vue-cli-service lint",
      "git add"
    ]
  }
```

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| IE10, IE11, Edge                                             | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |

## 讨论交流（QQ群：584617908）

  <p align="left">
  <a  target="_blank">
    <img width="180" src="https://github.com/RainManGO/vue3-composition-admin/blob/main/IMAGE/QQ.JPG" alt="qq">
  </a>
</p>

## License

[MIT](https://github.com/rcyj-FED/vue3-composition-admin/blob/main/LICENSE)

Copyright (c) 2021-present 
