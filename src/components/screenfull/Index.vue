<!--
 * @Description: 全屏按钮
 * @Author: ZY
 * @Date: 2020-12-23 18:11:46
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-25 10:14:19
-->

<template>
  <div id="screenfull">
    <div
      v-if="isFullscreen"
      @click="click"
    >
      <svg
        class="icon"
        aria-hidden="true"
        font-size="20px"
      >
        <use xlink:href="#iconexitfullscreen" />
      </svg>
    </div>
    <div
      @click="click"
      v-else
    >
      <svg
        class="icon"
        aria-hidden="true"
        font-size="20px"
      >
        <use xlink:href="#iconfullscreen" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import screenfull from 'screenfull'
import { defineComponent, onBeforeUnmount, onMounted, reactive, toRefs } from 'vue'
import { ElMessage } from 'element-plus'

const sf = screenfull
export default defineComponent({
  setup() {
    const state = reactive({
      isFullscreen: false,
      click: () => {
        if (!sf.isEnabled) {
          ElMessage({
            message: 'you browser can not work',
            type: 'warning'
          })
          return false
        }
        sf.toggle()
      }
    })
    const change = () => {
      if (sf.isEnabled) {
        state.isFullscreen = sf.isFullscreen
      }
    }
    onMounted(() => {
      if (sf.isEnabled) {
        sf.on('change', change)
      }
    })

    onBeforeUnmount(() => {
      if (sf.isEnabled) {
        sf.off('change', change)
      }
    })

    return {
      ...toRefs(state)
    }
  }
})

</script>
