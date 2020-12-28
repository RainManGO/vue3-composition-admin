/*
 * @Description: axios 封装网络请求
 * @Author: ZY
 * @Date: 2020-12-28 14:45:32
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-28 14:46:06
 */

import { useStore } from '@/store'
import HttpClient, { HttpClientConfig } from 'axios-mapper'

const config: HttpClientConfig = {
  baseURL: 'http://www.httpbin.org',
  headers: {
    token: useStore().state.user.token
  }
}
const https = new HttpClient(config)

export default https
