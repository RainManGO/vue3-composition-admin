/*
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-08 08:50:30
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-16 15:32:22
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.gif' {
  export const gif: any
}

// TODO: remove this part after vue-count-to has its typescript file
declare module 'vue-count-to'
// TODO: remove this part after vue-image-crop-upload has its typescript file
declare module 'vue-image-crop-upload'
