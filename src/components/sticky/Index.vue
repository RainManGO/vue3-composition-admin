<!--
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-20 20:16:17
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-25 13:29:33
-->
<template>
  <div
    :style="{height: height, zIndex: zIndex}"
    class="sticky"
  >
    <div
      :class="className"
      :style="{
        top: isSticky ? stickyTop + 'px' : '',
        zIndex: zIndex,
        position: position,
        width: width,
        height: height
      }"
    >
      <slot>
        <div>sticky</div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

export default defineComponent({
  props: {
    stickyTop: {
      type: Number,
      default: 0
    },
    zIndex: {
      type: Number,
      default: 1
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const state = reactive({
      active: false,
      position: '',
      isSticky: false,
      width: 'auto',
      height: 'auto'
    })
    onMounted(() => {
      state.height =
        document
          .querySelector('.sticky')
          ?.getBoundingClientRect()
          .height.toString() + 'px'
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      window.addEventListener('scroll', handleScroll)
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      window.addEventListener('resize', handleResize)
    })
    const activated = () => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      handleScroll()
    }
    const destroyed = () => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      window.removeEventListener('scroll', handleScroll)
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      window.removeEventListener('resize', handleResize)
    }
    const sticky = () => {
      if (state.active) {
        return
      }
      state.position = 'fixed'
      state.active = true
      state.width = state.width + 'px'
      state.isSticky = true
    }

    const handleReset = () => {
      if (!state.active) {
        return
      }
      state.position = ''
      state.width = 'auto'
      state.active = false
      state.isSticky = false
    }

    const handleScroll = () => {
      const width = document.querySelector('.sticky')?.getBoundingClientRect()
        .width
      state.width = width?.toString() + 'px' || 'auto'
      const offsetTop = document
        .querySelector('.sticky')
        ?.getBoundingClientRect().top

      if (offsetTop) {
        if (offsetTop < props.stickyTop) {
          sticky()
          return
        }
      }

      handleReset()
    }

    const handleResize = () => {
      if (state.isSticky) {
        state.width = document.querySelector('.sticky')?.getBoundingClientRect().width.toString() + 'px'
      }
    }

    return {
      ...toRefs(state),
      activated,
      destroyed,
      sticky,
      handleReset,
      handleScroll,
      handleResize
    }
  }
})
</script>
