/*
 * @Description: echarts 自适应问题
 * @Author: ZY
 * @Date: 2021-01-14 15:11:11
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-14 16:34:24
 */

import { ref } from 'vue'
export default function() {
  const chart = ref<any>()
  const sidebarElm = ref<Element>()

  const chartResizeHandler = () => {
    if (chart.value) {
      chart.value.resize()
    }
  }

  const sidebarResizeHandler = (e: TransitionEvent) => {
    if (e.propertyName === 'width') {
      chartResizeHandler()
    }
  }

  const initResizeEvent = () => {
    window.addEventListener('resize', chartResizeHandler)
  }

  const destroyResizeEvent = () => {
    window.removeEventListener('resize', chartResizeHandler)
  }

  const initSidebarResizeEvent = () => {
    sidebarElm.value = document.getElementsByClassName('sidebar-container')[0]
    if (sidebarElm.value) {
      sidebarElm.value.addEventListener('transitionend', sidebarResizeHandler as EventListener)
    }
  }

  const destroySidebarResizeEvent = () => {
    if (sidebarElm.value) {
      sidebarElm.value.removeEventListener('transitionend', sidebarResizeHandler as EventListener)
    }
  }

  const mounted = () => {
    initResizeEvent()
    initSidebarResizeEvent()
  }

  const beforeDestroy = () => {
    destroyResizeEvent()
    destroySidebarResizeEvent()
  }

  const activated = () => {
    initResizeEvent()
    initSidebarResizeEvent()
  }

  const deactivated = () => {
    destroyResizeEvent()
    destroySidebarResizeEvent()
  }

  return {
    chart,
    mounted,
    beforeDestroy,
    activated,
    deactivated
  }
}
