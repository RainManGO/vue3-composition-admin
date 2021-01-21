<template>
  <el-table
    :data="list"
    border
    fit
    highlight-current-row
    style="width: 100%"
  >
    <el-table-column
      v-loading="loading"
      align="center"
      label="ID"
      width="65"
      element-loading-text="请给我点时间！"
    >
      <template #default="{row}">
        <span>{{ row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column
      width="180px"
      align="center"
      label="Date"
    >
      <template #default="{row}">
        <span>{{ row.timestamp }}</span>
      </template>
    </el-table-column>

    <el-table-column
      min-width="240px"
      label="Title"
    >
      <template #default="{row}">
        <span>{{ row.title }}</span>
        <el-tag>{{ row.type }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
      width="180px"
      align="center"
      label="Author"
    >
      <template #default="{row}">
        <span>{{ row.author }}</span>
      </template>
    </el-table-column>

    <el-table-column
      width="120px"
      label="Importance"
    >
      <template #default="{row}">
        <svg-icon
          v-for="n in +row.importance"
          :key="n"
          name="star"
        />
      </template>
    </el-table-column>

    <el-table-column
      align="center"
      label="Readings"
      width="95"
    >
      <template #default="{row}">
        <span>{{ row.pageviews }}</span>
      </template>
    </el-table-column>

    <el-table-column
      class-name="status-col"
      label="Status"
      width="110"
    >
      <template #default="{row}">
        <el-tag :type="row.status ">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { getArticles } from '@/apis/articles'
import { ArticleModel } from '@/model/articleModel'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'CN'
    }
  },
  emits: ['create'],
  setup(_, ctx) {
    console.log('tabtabtabtabtabatabtabtab')
    const dataMap = reactive({
      list: Array<ArticleModel>(),
      listQuery: {
        page: 1,
        limit: 5,
        type: _.type,
        sort: 'id'
      },
      loading: false,
      async getList() {
        dataMap.loading = true
        ctx.emit('create')
        const data = await getArticles(dataMap.listQuery)
        dataMap.list = data?.data.items ?? []
        // Just to simulate the time of the request
        setTimeout(() => {
          dataMap.loading = false
        }, 0.5 * 1000)
      }
    })
    onMounted(() => {
      dataMap.getList()
    })
    return { ...toRefs(dataMap) }
  }

})
</script>
