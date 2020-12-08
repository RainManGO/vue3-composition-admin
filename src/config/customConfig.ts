/*
 * @Description: 自定义配置
 * @Author: ZY
 * @Date: 2020-12-08 14:26:07
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-08 15:21:33
 */

import { NetworkConfig } from './default/net.config'
import { VueConfig } from './default/vue.default.config'
import { Theme } from './default/theme.config'
import { Settings } from './default/setting.config'

type CustomConfig = NetworkConfig & VueConfig & Theme & Settings

const _customConfig: CustomConfig = {

}

export default _customConfig
