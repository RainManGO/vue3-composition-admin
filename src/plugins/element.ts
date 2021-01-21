/*
 * @Description: element 组件
 * @Author: ZY
 * @Date: 2020-12-25 08:45:49
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-05 17:21:06
 */

// import {
//   ElButton,
//   ElSelect,
//   ElBreadcrumb,
//   ElBreadcrumbItem,
//   ElIcon,
//   ElDropdown,
//   ElDropdownMenu,
//   ElDropdownItem,
//   ElPopover,
//   ElMessage,
//   ElForm,
//   ElFormItem,
//   ElLoading,
//   ElInput,
//   ElTooltip,
//   ElDialog,
//   ElScrollbar,
//   ElMenu,
//   ElMenuItem,
//   ElSubmenu
// } from 'element-plus'

/**
 *  系统的全局设置size，全部加载方便设置。
 *  如需按需加载:
 *  1.放开注释
 *  2.引入babel-plugin-component库
 *  3.放开babel.config 注释
 */
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import '@/styles/element-variables.scss'
import { useStore } from '@/store'
export default function loadComponent(app: any) {
  app.use(ElementPlus, { size: useStore().state.app.size })

  // app.use(ElButton)
  // app.use(ElSelect)
  // app.use(ElBreadcrumb)
  // app.use(ElBreadcrumbItem)
  // app.use(ElIcon)
  // app.use(ElDropdown)
  // app.use(ElDropdownMenu)
  // app.use(ElDropdownItem)
  // app.use(ElPopover)
  // app.use(ElForm)
  // app.use(ElFormItem)
  // app.use(ElLoading)
  // app.use(ElInput)
  // app.use(ElTooltip)
  // app.use(ElDialog)
  // app.use(ElScrollbar)
  // app.use(ElMenu)
  // app.use(ElSubmenu)
  // app.use(ElMenuItem)

  // app.config.globalProperties.$message = ElMessage
}
