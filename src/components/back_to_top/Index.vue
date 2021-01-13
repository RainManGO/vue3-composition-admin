<!--
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-13 08:47:06
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-13 18:52:15
-->
<template>
  <div>
    <transition :name="transitionName">
      <div
        v-show="visible"
        :style="customStyle"
        class="back-to-ceiling"
        @click="backTop"
      >
        返回顶部
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from 'vue'
export default defineComponent({
  props: {
    transitionName: {
      type: String,
      default: ''
    },
    visibilityHeight: {
      type: Number,
      default: 0
    },
    backPosition: {
      type: Number,
      default: 0
    },
    customStyle: {
      type: Object,
      default: () => {
        return {
          right: '',
          bottom: '',
          width: '',
          height: '',
          'border-radius': '',
          'line-height': '',
          background: ''
        }
      }
    }
  },
  setup(props) {
    console.log('props', props)
    let visible = false; let isMoving = false; const interval: any = Number
    function handleScroll() {
      visible = window.pageYOffset > props.visibilityHeight
    }
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
      if (interval) {
        clearInterval(interval)
      }
    })
    function easeInOutQuad(t: number, b: number, c: number, d: number) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b
      return (-c / 2) * (--t * (t - 2) - 1) + b
    }
    function backTop() {
      if (isMoving) return
      const start = window.pageYOffset
      let i = 0
      isMoving = true
      const interval = setInterval(() => {
        const next = Math.floor(easeInOutQuad(10 * i, start, -start, 500))
        if (next <= props.backPosition) {
          window.scrollTo(0, props.backPosition)
          clearInterval(interval)
          isMoving = false
        } else {
          window.scrollTo(0, next)
        }
        i++
      }, 16.7)
    }
    return {
      interval, visible, backTop, isMoving, easeInOutQuad, handleScroll
    }
  }
})
</script>
<style lang="scss" scoped>
.back-to-ceiling {
  position: fixed;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  :hover {
    background: #d5dbe7;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.back-to-ceiling .backTopIcon {
  fill: #9aaabf;
  background: none;
}
</style>
