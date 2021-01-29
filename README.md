<<<<<<< HEAD
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

  - 保持技术的先进性，跟上技术发展
  - 作为公司定制组件的代码demo集合
  - 解决方案集合
  - 统一技术标准

在线demo演示地址：https://admin-tmpl.rencaiyoujia.com/

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
- [vue-vue-i18n-next](https://github.com/panter/vue-i18next)


## Document

- [文档地址](https://rcyj-fed.github.io/vue3-composition-admin-docs/)
- [文档项目git地址](https://github.com/rcyj-FED/vue3-composition-admin-docs)


## Setup

项目主要是前端和mock server（node）

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

\```
admin-tmpl
├─ .browserslistrc
├─ .editorconfig
├─ .env.dev.build
├─ .env.dev.serve
├─ .env.prod.build
├─ .env.prod.serve
├─ .env.test.build
├─ .env.test.serve
├─ .eslintignore
├─ .eslintrc.js
├─ .github
│  └─ workflows
│     └─ deploy.yml
├─ .gitignore
├─ .travis.yml
├─ Jenkinsfile
├─ LICENSE
├─ README.md
├─ babel.config.js
├─ dist
├─ docker
├─ jest.config.js
├─ k8smanifests
├─ mock
│  ├─ constant.ts
│  ├─ controller
│  ├─ middleware
│  ├─ mock.ts
│  ├─ mockdb
│  ├─ requestDecorator.ts
│  ├─ router.ts
│  ├─ tsconfig.json
│  ├─ type.d.ts
│  └─ utils
├─ package.json
├─ public
├─ src
│  ├─ @types
│  ├─ App.vue
│  ├─ apis
│  ├─ assets
│  ├─ components
│  ├─ config
│  │  ├─ customConfig.ts
│  │  ├─ default
│  │  │  ├─ index.ts
│  │  │  ├─ layout.ts
│  │  │  ├─ net.config.ts
│  │  │  ├─ setting.config.ts
│  │  │  ├─ theme.config.ts
│  │  │  ├─ vue.custom.config.js
│  │  │  └─ whitelist.ts
│  │  └─ index.ts
│  ├─ constant
│  │  ├─ headers.ts
│  │  ├─ key.ts
│  │  ├─ network.ts
│  │  └─ settings.ts
│  ├─ directives
│  │  ├─ clipboard
│  │  │  └─ index.ts
│  │  ├─ el-draggable-dialog
│  │  │  └─ index.ts
│  │  ├─ index.ts
│  │  ├─ permission
│  │  │  └─ index.ts
│  │  └─ waves
│  │     ├─ index.ts
│  │     └─ waves.css
│  ├─ layout
│  ├─ locales
│  ├─ main.ts
│  ├─ model
│  ├─ permission.ts
│  ├─ plugins
│  ├─ router
│  ├─ shims-vue.d.ts
│  ├─ store
│  ├─ styles
│  ├─ utils
│  └─ views
├─ tsconfig.json
├─ vue.config.js
└─ yarn.lock

\```

### Mock

后台模拟服务器和其他版本不同，采用koa2+Faker进行模拟。

- [Koa2](https://github.com/koajs/koa)
- [Faker](https://github.com/Marak/faker.js)

启动mock server:

```shell
     "mock": "cd mock && ts-node-dev mock.ts"
```

mock 需要部署到服务器，单独项目地址：https://github.com/rcyj-FED/admin-tmpl-mock
mock在线测试地址：https://admin-tmpl-mock.rencaiyoujia.com/

### vue admin

多环境启动：

```shell
    "serve:dev": "cross-env NODE_ENV=development dotenv -e .env.dev.serve vue-cli-service serve",
    "build:dev": "cross-env NODE_ENV=production  dotenv -e .env.dev.build vue-cli-service build",
    "serve:test": "cross-env NODE_ENV=development dotenv -e .env.test.serve vue-cli-service serve",
    "build:test": "cross-env NODE_ENV=production  dotenv -e .env.test.build vue-cli-service build",
    "serve:prod": "cross-env NODE_ENV=development dotenv -e .env.prod.serve vue-cli-service serve",
    "build:prod": "cross-env NODE_ENV=production  dotenv -e .env.prod.build vue-cli-service build",
```


快捷启动(同时启动前后端)：

```shell
    "start": "concurrently \"npm run mock\" \"npm run serve:dev\"",
```




## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| IE10, IE11, Edge                                             | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |

## License

[MIT](https://github.com/rcyj-FED/vue3-composition-admin/blob/main/LICENSE)

Copyright (c) 2021-present 人才有价
=======
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
  - 保持技术的先进性，跟上技术发展
  - 作为公司定制组件的代码demo集合
  - 解决方案集合
  - 统一技术标准

在线demo演示地址：https://admin-tmpl.rencaiyoujia.com/

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
- [vue-vue-i18n-next](https://github.com/panter/vue-i18next)


## Document

- [文档地址](https://rcyj-fed.github.io/vue3-composition-admin-docs/)
- [文档项目git地址](https://github.com/rcyj-FED/vue3-composition-admin-docs)


## Setup

项目主要是前端和mock server（node）

### Mock

后台模拟服务器和其他版本不同，采用koa2+Faker进行模拟。

- [Koa2](https://github.com/koajs/koa)
- [Faker](https://github.com/Marak/faker.js)

启动mock server:

```shell
     "mock": "cd mock && ts-node-dev mock.ts"
```

mock 需要部署到服务器，单独项目地址：https://github.com/rcyj-FED/admin-tmpl-mock
mock在线测试地址：https://admin-tmpl-mock.rencaiyoujia.com/

### vue admin

多环境启动：

```shell
    "serve:dev": "cross-env NODE_ENV=development dotenv -e .env.dev.serve vue-cli-service serve",
    "build:dev": "cross-env NODE_ENV=production  dotenv -e .env.dev.build vue-cli-service build",
    "serve:test": "cross-env NODE_ENV=development dotenv -e .env.test.serve vue-cli-service serve",
    "build:test": "cross-env NODE_ENV=production  dotenv -e .env.test.build vue-cli-service build",
    "serve:prod": "cross-env NODE_ENV=development dotenv -e .env.prod.serve vue-cli-service serve",
    "build:prod": "cross-env NODE_ENV=production  dotenv -e .env.prod.build vue-cli-service build",
```


快捷启动(同时启动前后端)：

```shell
    "start": "concurrently \"npm run mock\" \"npm run serve:dev\"",
```




## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge | last 2 versions | last 2 versions | last 2 versions |

## License

[MIT](https://github.com/rcyj-FED/vue3-composition-admin/blob/main/LICENSE)

Copyright (c) 2021-present 人才有价


>>>>>>> a031f60fba491c04e2507896d0897eb03fc1da2f
