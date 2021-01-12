<!--
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-05 19:11:34
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-09 11:00:55
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
import { defineComponent, reactive, ref, toRefs, computed, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'
export default defineComponent({
  emits: ['scroll'],
  setup(_, context) {
    const scrollContainerRef = ref(null)
    const scrollWrapper = computed(() => {
      return (scrollContainerRef.value as any).$refs.wrap as HTMLElement
    })
    const { ctx } = getCurrentInstance() as any
    const tagSpacing = 4

    const state = reactive({
      handleScroll: (e: WheelEvent) => {
        const eventDelta = (e as any).wheelDelta || -e.deltaY * 40
        scrollWrapper.value.scrollLeft = scrollWrapper.value.scrollLeft + eventDelta / 4
      },
      moveToCurrentTag: (currentTag: HTMLElement) => {
        const container = (scrollContainerRef.value as any).$el as HTMLElement
        const containerWidth = container.offsetWidth
        const tagList = ctx.$parent.$refs.tag as any[]
        let fristTag = null
        let lastTag = null

        // find first tag and last tag
        if (tagList.length > 0) {
          fristTag = tagList[0]
          lastTag = tagList[tagList.length - 1]
        }

        if (fristTag === currentTag) {
          scrollWrapper.value.scrollLeft = 0
        } else if (lastTag === currentTag) {
          scrollWrapper.value.scrollLeft = scrollWrapper.value.scrollWidth - containerWidth
        } else {
          // find preTag and nextTag
          const currentIndex = tagList.findIndex(item => item === currentTag)
          const prevTag = tagList[currentIndex - 1]
          const nextTag = tagList[currentIndex + 1]
          // the tag's offsetLeft after of nextTag
          const afterNextTagOffsetLeft = nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagSpacing
          // the tag's offsetLeft before of prevTag
          const beforePrevTagOffsetLeft = prevTag.$el.offsetLeft - tagSpacing

          if (afterNextTagOffsetLeft > scrollWrapper.value.scrollLeft + containerWidth) {
            scrollWrapper.value.scrollLeft = afterNextTagOffsetLeft - containerWidth
          } else if (beforePrevTagOffsetLeft < scrollWrapper.value.scrollLeft) {
            scrollWrapper.value.scrollLeft = beforePrevTagOffsetLeft
          }
        }
      }
    })

    const emitScroll = () => {
      context.emit('scroll')
    }

    onMounted(() => {
      scrollWrapper.value.addEventListener('scroll', emitScroll, true)
    })

    onBeforeUnmount(() => {
      scrollWrapper.value.removeEventListener('scroll', emitScroll)
    })

    return {
      scrollContainerRef,
      ...toRefs(state)
    }
  }

})
</script>

<style lang="scss" scoped>

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
