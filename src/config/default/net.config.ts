/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-08 09:45:25
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-26 12:27:00
 */

import { ContentType, Device } from '@/constant/headers'
import { InfoShowType } from '@/constant/network'
import settings from "./setting.config";
interface Headers{
    token: string
    contentType: string
    version: string
    device: Device
}

const _header: Headers = {
  token: '',
  contentType: ContentType.JSON,
  version: settings.version ?? '1.0',
  device: Device.PC
}

export interface NetworkConfig{
    host?: string
    timeout?: number
    loading?: false
    errorShowType?: InfoShowType
    header?: {}
}

const networkConfig: NetworkConfig = {
  host: process.env.VUE_APP_BASE_API,
  timeout: 10000,
  loading: false,
  errorShowType: InfoShowType.LOG,
  header: _header
}

export default networkConfig
