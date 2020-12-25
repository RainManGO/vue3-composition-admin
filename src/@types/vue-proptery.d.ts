/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-25 09:50:16
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-25 09:50:56
 */
import { ElMessage } from 'element-plus'
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $message: ElMessage
    }
  }
