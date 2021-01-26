<template>
  <div class="app-container">
    <el-input
      v-model="filename"
      placeholder="Please enter the file name (default file)"
      style="width:300px;"
      prefix-icon="el-icon-document"
    />
    <el-button
      :loading="downloadLoading"
      style="margin-bottom:20px;"
      type="primary"
      icon="el-icon-document"
      @click="handleDownload"
    >
      Export Zip
    </el-button>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading..."
      border
      fit
      highlight-current-row
    >
      <el-table-column
        align="center"
        label="ID"
        width="95"
      >
        <template #default="{$index}">
          {{ $index }}
        </template>
      </el-table-column>
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
      <el-table-column
        label="Date"
        align="center"
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
import { exportTxt2Zip } from '@/utils/zip'

export default defineComponent({
  setup() {
    const dataMap = reactive({
      list: Array<ArticleModel>(),
      listLoading: true,
      downloadLoading: false,
      filename: ''
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
      const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
      const filterVal = ['id', 'title', 'author', 'pageviews', 'timestamp']
      const list = dataMap.list
      const data = formatJson(filterVal, list)
      if (dataMap.filename !== '') {
        exportTxt2Zip(tHeader, data, dataMap.filename, dataMap.filename)
      } else {
        exportTxt2Zip(tHeader, data)
      }
      dataMap.downloadLoading = false
    }
    onMounted(() => {
      fetchData()
    })
    return { ...toRefs(dataMap), handleDownload, fetchData }
  }
})
</script>
