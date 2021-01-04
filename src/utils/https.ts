/*
 * @Description: axios 封装网络请求
 * @Author: ZY
 * @Date: 2020-12-28 14:45:32
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-29 15:13:00
 */

import { useStore } from '@/store'
import HttpClient, { HttpClientConfig } from 'axios-mapper'

const https = (hasToken: Boolean = true) => {
  const config: HttpClientConfig = {
    baseURL: 'http://localhost:3000',
    headers: {
      token: hasToken ? useStore().state.user.token : ''
    }
  }
  return new HttpClient(config)
}

export default https
