/*
 * @Description: i18n国际化
 * @Author: ZY
 * @Date: 2020-12-19 11:53:48
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-23 10:08:34
 */
import i18n from '@/locales'
export default function loadComponent(app: any) {
  app.use(i18n)
}
