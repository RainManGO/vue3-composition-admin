/*
 * @Author: ZY
 * @Date: 2023-04-05 21:48:55
 * @LastEditors: ZY
 * @LastEditTime: 2023-04-17 19:53:38
 * @FilePath: /vue3-composition-admin/src/stores/user.ts
 * @Description: 全局共享用户信息
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
