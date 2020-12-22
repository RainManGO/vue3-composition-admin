<!--
 * @Description: 面包屑组件
 * @Author: ZY
 * @Date: 2020-12-22 11:02:14
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-22 17:32:58
-->
<template>
  <a-breadcrumb
    class="app-breadcrumb"
  >
    <transition-group name="breadcrumb">
      <a-breadcrumb-item
        v-for="(item, index) in breadcrumbs"
        :key="item.path"
      >
        <span
          v-if="item.redirect === 'noredirect' || index === breadcrumbs.length-1"
          class="no-redirect"
        >{{ item.meta.title }}</span>
        <a
          v-else
          @click.prevent="handleLink(item)"
        >{{ item.meta.title }}</a>
      </a-breadcrumb-item>
    </transition-group>
  </a-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs, watch } from 'vue'
import { useRoute, RouteLocationMatched, useRouter } from 'vue-router'
import { compile } from 'path-to-regexp'

export default defineComponent({
  setup() {
    const pathCompile = (path: string) => {
      const { params } = useRoute()
      const toPath = compile(path)
      return toPath(params)
    }
    const state = reactive({
      breadcrumbs: [] as Array<RouteLocationMatched>,
      getBreadcrumb: () => {
        let matched = useRoute().matched.filter((item) => item.meta && item.meta.title)
        const frist = matched[0]

        if (!state.isDashboard(frist)) {
          matched = [{ path: '/dashboard', meta: { title: 'dashboard' } } as RouteLocationMatched].concat(matched)
        }
        state.breadcrumbs = matched.filter((item) => {
          return item.meta && item.meta.title && item.meta.breadcrumb !== false
        })
      },
      isDashboard(route: RouteLocationMatched) {
        const name = route && route.name
        if (!name) {
          return false
        }
        return name.toString().trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
      },
      handleLink(item: any) {
        const { redirect, path } = item
        if (redirect) {
          useRouter().push(redirect).catch((err) => {
            console.warn(err)
          })
          return
        }
        useRouter().push(pathCompile(path)).catch((err) => {
          console.warn(err)
        })
      }
    })

    watch(useRoute(), (current) => {
      if (current.path.startsWith('/redirect/')) {
        return
      }
      state.getBreadcrumb()
    })

    onBeforeMount(() => {
      state.getBreadcrumb()
    })

    return {
      ...toRefs(state)
    }
  }

})

</script>

<style lang="scss" scoped>

.app-breadcrumb{
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
