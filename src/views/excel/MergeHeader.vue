<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-25 11:39:42
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-27 13:54:34
-->
<template>
  <div class="app-container">
    <el-button
      :loading="downloadLoading"
      style="margin-bottom:20px"
      type="primary"
      icon="el-icon-document"
      @click="handleDownload"
    >
      {{ t('excel.export') }}
    </el-button>

    <el-table
      ref="multipleTable"
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        align="center"
        label="Id"
        width="95"
      >
        <template #default="{$index}">
          {{ $index }}
        </template>
      </el-table-column>
      <el-table-column
        label="Main Information"
        align="center"
      >
        <el-table-column label="Title">
          <template #default="{row}">
            {{ row.title }}
          </template>
        </el-table-column>
        <el-table-column
          label="Author"
          align="center"
          width="180"
        >
          <template #default="{row}">
            <el-tag>{{ row.author }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="Readings"
          align="center"
          width="115"
        >
          <template #default="{row}">
            {{ row.pageviews }}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        align="center"
        label="Date"
        width="220"
      >
        <template #default="{row}">
          <i class="el-icon-time" />
          <span>{{ row.timestamp }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { getArticles } from '@/apis/articles'
import { ArticleModel } from '@/model/articleModel'
import { formatJson } from '@/utils'
import { exportJson2Excel } from '@/utils/excel'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  setup() {
    const { t } = useI18n()
    const dataMap = reactive({
      list: Array<ArticleModel>(),
      listLoading: true,
      downloadLoading: false
    })

    const fetchData = async() => {
      dataMap.listLoading = true
      const data = await getArticles({ /* Your params here */ })
      dataMap.list = data?.data.items ?? []
      // Just to simulate the time of the request
      setTimeout(() => {
        dataMap.listLoading = false
      }, 0.5 * 1000)
    }

    const handleDownload = () => {
      dataMap.downloadLoading = true
      const multiHeader = [['Id', 'Main Information', '', '', 'Date']]
      const header = ['', 'Title', 'Author', 'Readings', '']
      const filterVal = ['id', 'title', 'author', 'pageviews', 'timestamp']
      const list = dataMap.list
      const data = formatJson(filterVal, list)
      const merges = ['A1:A2', 'B1:D1', 'E1:E2']
      exportJson2Excel(header, data, 'merge-header', multiHeader, merges)
      dataMap.downloadLoading = false
    }
    onMounted(() => {
      fetchData()
    })
    return { t, ...toRefs(dataMap), fetchData, handleDownload }
  }
})
</script>
