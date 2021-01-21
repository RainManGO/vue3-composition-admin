/*
 * @Description: 全局loading
 * @Author: ZY
 * @Date: 2021-01-20 15:02:11
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-20 15:09:36
 */

import { ElLoading } from 'element-plus'

export default function() {
  const loading = (title: string) => {
    const loadingInstance = ElLoading.service({ text: title })
    return loadingInstance
  }

  return {
    loading
  }
}
