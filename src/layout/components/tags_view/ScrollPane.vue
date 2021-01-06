<!--
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-05 19:11:34
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-06 08:51:00
-->
<template>
  <el-scrollbar
    ref="scrollContainerRef"
    :vertical="false"
    class="scroll-container"
    @wheel.prevent="handleScroll"
  >
    <slot />
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, computed, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const scrollContainerRef = ref(null)
    const scrollWrapper = computed(() => {
      return (scrollContainerRef as any).$refs.wrap as HTMLElement
    })
    const state = reactive({
      tagSpacing: 4,
      handleScroll: (e: WheelEvent) => {
        const eventDelta = (e as any).wheelDelta || -e.deltaY * 40
        scrollWrapper.value.scrollLeft = scrollWrapper.value.scrollLeft + eventDelta / 4
      }
    })

    // const emitScroll = () => {

    // }

    onMounted(() => {
    //   scrollWrapper.value.addEventListener('scroll', this.e)
    })

    return {
      scrollContainerRef,
      ...toRefs(state)
    }
  }

})
</script>

<style lang="scss">
.scroll-container {
  .el-scrollbar__bar {
    bottom: 0px;
  }

  .el-scrollbar__wrap {
    height: 49px;
  }
}
</style>

<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
}
</style>
