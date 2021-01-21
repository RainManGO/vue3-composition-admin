<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column
        width="80"
        align="center"
        label="ID"
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
        width="180px"
        align="center"
        label="Author"
      >
        <template #default="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="105px"
        label="Importance"
      >
        <template #default="{row}">
          <svg-icon
            v-for="n in +row.importance"
            :key="n"
            name="star"
            class="meta-item__icon"
          />
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

      <el-table-column
        min-width="300px"
        label="Title"
      >
        <template #default="{row}">
          <router-link
            :to="'/example/edit/'+row.id"
            class="link-type"
          >
            <span>{{ row.title }}</span>
          </router-link>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        label="Actions"
        width="120"
      >
        <template #default="{row}">
          <router-link :to="'/example/edit/'+row.id">
            <el-button
              type="primary"
              size="small"
              icon="el-icon-edit"
            >
              Edit
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      v-model:page="listQuery.page"
      v-model:limit="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script lang="ts">
import { getArticles } from '@/apis/articles'
import { ArticleModel } from '@/model/articleModel'

import { defineComponent, reactive, toRefs, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const dataMap = reactive({
      total: 0,
      list: Array<ArticleModel>(),
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      },
      async getList() {
        dataMap.listLoading = true
        const data = await getArticles(dataMap.listQuery)
        dataMap.list = data?.data.items ?? []
        dataMap.total = data?.data.total ?? 0
        // Just to simulate the time of the request
        setTimeout(() => {
          dataMap.listLoading = false
        }, 0.5 * 1000)
      }
    })
    onMounted(() => {
      dataMap.getList()
    })
    return { ...toRefs(dataMap) }
  }
})
// }
</script>

<style lang="scss" scoped>
.edit-input {
  padding-right: 100px;
}

.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
