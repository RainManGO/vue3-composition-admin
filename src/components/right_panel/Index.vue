<!--
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-24 10:44:01
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-08 19:43:59
-->

<template>
  <div
    ref="rightPanelRef"
    :class="{show: show}"
    class="rightPanel-container"
  >
    <div class="rightPanel-background" />
    <div class="rightPanel">
      <div
        class="handle-button"
        :style="{'top': buttonTop+'px','background-color': theme}"
        @click="show=!show"
      >
        <i :class="show?'el-icon-close':'el-icon-setting'" />
      </div>
      <div class="rightPanel-items">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
// import { addClass, removeClass } from '@/utils'
import { computed, defineComponent, ref, onMounted, onBeforeUnmount, reactive, watch, toRefs } from 'vue'
export default defineComponent({
  props: {
    clickNotClose: {
      type: Boolean,
      default: false
    },
    buttonTop: {
      type: Number,
      default: 250
    }
  },
  setup(props) {
    const state = reactive({
      show: false
    })
    const rightPanelRef = ref(null)
    const theme = computed(() => {
      return useStore().state.settings.theme
    })

    const closeSidebar = (ev: MouseEvent) => {
      const parent = (ev.target as HTMLElement).closest('.rightPanel')
      if (parent) {
        state.show = false
        window.removeEventListener('click', closeSidebar)
      }
    }

    const addEventClick = () => {
      window.addEventListener('click', closeSidebar)
    }

    watch(() => state.show, (value) => {
      if (value && !props.clickNotClose) {
        addEventClick()
      }
      // if (value) {
      //   addClass(document.body, 'showRightPanel')
      // } else {
      //   removeClass(document.body, 'showRightPanel')
      // }
    })

    const insertToBody = () => {
      const elx = rightPanelRef.value
      if (elx) {
        const body = document.querySelector('body')
        if (body) {
          body.insertBefore(elx, body.firstChild)
        }
      }
    }

    onMounted(() => {
      insertToBody()
    })

    onBeforeUnmount(() => {
      const elx = rightPanelRef.value as any
      if (elx) {
        elx.remove()
      }
    })

    return {
      ...toRefs(state),
      rightPanelRef,
      theme
    }
  }
})
</script>

<style lang="scss" scoped>
.showRightPanel {
  overflow: hidden;
  position: relative;
  width: calc(100% - 15px);
}
</style>

<style lang="scss" scoped>
.rightPanel-background {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity .3s cubic-bezier(.7, .3, .1, 1);
  background: rgba(0, 0, 0, .2);
  z-index: -1;
}

.rightPanel {
  width: 100%;
  max-width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .05);
  transition: all .25s cubic-bezier(.7, .3, .1, 1);
  transform: translate(100%);
  background: #fff;
  z-index: 40000;
}

.show {
  transition: all .3s cubic-bezier(.7, .3, .1, 1);

  .rightPanel-background {
    z-index: 20000;
    opacity: 1;
    width: 100%;
    height: 100%;
  }

  .rightPanel {
    transform: translate(0);
  }
}

.handle-button {
  width: 48px;
  height: 48px;
  position: absolute;
  left: -48px;
  text-align: center;
  font-size: 24px;
  border-radius: 6px 0 0 6px !important;
  z-index: 0;
  cursor: pointer;
  pointer-events: auto;
  color: #fff;
  line-height: 48px;

  i {
    font-size: 24px;
    line-height: 48px;
  }
}
</style>
