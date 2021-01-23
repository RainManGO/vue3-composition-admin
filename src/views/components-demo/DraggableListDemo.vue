<!--
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-18 17:28:28
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-21 18:55:05
-->
<template>
  <div class="components-container">
    <aside>
      draggable-list base on
      <a
        href="https://github.com/SortableJS/Vue.Draggable"
        target="_blank"
      >
        Vue.Draggable
      </a>
    </aside>
    <div class="editor-container">
      <DraggableList
        :list1="list1"
        :list2="list2"
        list1-title="List"
        list2-title="Article pool"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue'
import { getArticles } from '@/apis/articles'
import DraggableList from '@/components/draggable-list/Index.vue'
export default defineComponent({
  components: {
    DraggableList
  },
  setup() {
    const state = reactive({
      list1: [],
      list2: []
    })
    onBeforeMount(() => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      fetchData()
    })
    const fetchData = async() => {
      const res: any = await getArticles({ /* Your params here */ })
      state.list1 = res.data.items.splice(0, 5)
      state.list2 = res.data.items
    }
    return {
      ...toRefs(state),
      fetchData
    }
  }
})
</script>
