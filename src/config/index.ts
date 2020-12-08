/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-08 09:45:01
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-08 15:27:02
 */
// 默认配置
import { vueConfig, netConfig, settingConfig, themeConfig } from './default'
// 自定义配置
import customConfig from './customConfig'

// 导出配置（自定义配置优先级高）
export default Object.assign({}, vueConfig, netConfig, settingConfig, themeConfig, customConfig)
