/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-19 11:53:57
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-19 14:53:44
 */
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export default function loadComponent(app: any) {
  app.use(antd)
}
