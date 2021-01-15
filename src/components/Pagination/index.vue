<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-12 11:36:19
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-13 13:54:51
-->
<template>
  <div
    :class="{hidden: hidden}"
    class="pagination-container"
  >
    <el-pagination
      :background="background"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs,ref } from 'vue'
import { scrollTo } from '@/utils/scroll_to'

export default defineComponent({
  props: {
    total: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    }
  },
  setup(props, context) {
    const data = reactive({
      page:ref(props.page)
      currentPage: () => {
        return props.page
      },
      currentPage: (value) => {
        context.$emit('update:page', value)
      },
      pageSize: () => {
        return this.limit
      },
      pageSize: (value) => {
        context.$emit('update:limit', value)
      },
      handleSizeChange: (value: number) => {
        context.$emit('pagination', { page: this.currentPage, limit: value })
        if (this.autoScroll) {
          scrollTo(0, 800)
        }
      },
      handleCurrentChange: (value: number) => {
        context.$emit('pagination', { page: value, limit: this.pageSize })
        if (this.autoScroll) {
          scrollTo(0, 800)
        }
      }
    })

    return { ...toRefs(data) }
  }
})
</script>

<style lang="scss" scoped>
.pagination-container {
  background: #fff;
  padding: 32px 16px;
}

.pagination-container.hidden {
  display: none;
}
</style>
