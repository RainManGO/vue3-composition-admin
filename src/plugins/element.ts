/*
 * @Description: element 组件
 * @Author: ZY
 * @Date: 2020-12-25 08:45:49
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-04 10:29:47
 */

import {
  ElButton,
  ElSelect,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElIcon,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElPopover,
  ElMessage,
  ElForm,
  ElFormItem,
  ElLoading,
  ElInput,
  ElTooltip,
  ElDialog
} from 'element-plus'
import '@/styles/element-variables.scss'
export default function loadComponent(app: any) {
  app.use(ElButton)
  app.use(ElSelect)
  app.use(ElBreadcrumb)
  app.use(ElBreadcrumbItem)
  app.use(ElIcon)
  app.use(ElDropdown)
  app.use(ElDropdownMenu)
  app.use(ElDropdownItem)
  app.use(ElPopover)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElLoading)
  app.use(ElInput)
  app.use(ElTooltip)
  app.use(ElDialog)

  app.config.globalProperties.$message = ElMessage
}
