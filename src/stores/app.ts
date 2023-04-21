/*
 * @Author: ZY
 * @Date: 2023-04-17 19:59:34
 * @LastEditors: ZY
 * @LastEditTime: 2023-04-21 19:53:48
 * @FilePath: /vue3-composition-admin/src/stores/app.ts
 * @Description: app 全局信息
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'

export type Theme = 'white' | 'dark'

export const useAppStore = defineStore('app', () => {
  const theme = ref<Theme>('white')
  const isLogin = ref(false)
  function setTheme(t:Theme) {
    theme.value = t
  }
  return { theme, setTheme,isLogin}
})
