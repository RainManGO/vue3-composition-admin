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
        align="center"
        label="ID"
        width="80"
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
        align="center"
        label="Author"
        width="180px"
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
        min-width="250px"
        label="Title"
      >
        <template #default="{row}">
          <template v-if="row.edit">
            <el-input
              v-model="row.title"
              class="edit-input"
              size="small"
            />
            <el-button
              class="cancel-btn"
              size="small"
              icon="el-icon-refresh"
              type="warning"
              @click="cancelEdit(row)"
            >
              cancel
            </el-button>
          </template>
          <span v-else>{{ row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        label="Actions"
        width="120"
      >
        <template #default="{row}">
          <el-button
            v-if="row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(row)"
          >
            Ok
          </el-button>
          <el-button
            v-else
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="row.edit = !row.edit"
          >
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, onMounted } from 'vue'
import { getArticles } from '@/apis/articles'
import { ArticleModel } from '@/model/articleModel'

import { ElMessage } from 'element-plus'
export default defineComponent({
  setup() {
    const dataMap = reactive({
      list: Array<ArticleModel>(), // 表格数据
      v: {}, // 是否可编辑
      listLoading: true, // 是否需要加载动画
      listQuery: { // 请求示例参数
        page: 1,
        limit: 10
      },
      async getList() {
        dataMap.listLoading = true
        const data = await getArticles(dataMap.listQuery)
        const items = data?.data.items
        if (items) {
          dataMap.list = items.map((v: any) => {
            dataMap.v = { edit: false }
            v.originalTitle = v.title // will be used when user click the cancel botton
            return v
          })
        }
        // Just to simulate the time of the request
        setTimeout(() => {
          dataMap.listLoading = false
        }, 0.5 * 1000)
      },
      cancelEdit(row: any) {
        row.title = row.originalTitle
        row.edit = false

        ElMessage.success({
          message: 'The title has been restored to the original value',
          type: 'success'
        })
      },
      confirmEdit(row: any) {
        row.edit = false
        row.originalTitle = row.title
        ElMessage.success({
          message: 'The title has been edited',
          type: 'success'
        })
      }
    })

    onMounted(() => {
      dataMap.getList()
    })

    return { ...toRefs(dataMap) }
  }

})
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
