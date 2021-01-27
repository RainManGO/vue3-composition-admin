<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.title"
        :placeholder="t('table.title')"
        style="width: 200px"
        class="filter-item"
        @keyup.enter="handleFilter"
      />
      <el-select
        v-model="listQuery.importance"
        :placeholder="t('table.importance')"
        clearable
        style="width: 120px"
        class="filter-item"
      >
        <el-option
          v-for="item in importanceOptions"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-select
        v-model="listQuery.type"
        :placeholder="t('table.type')"
        clearable
        class="filter-item"
        style="width: 130px"
      >
        <el-option
          v-for="item in calendarTypeOptions"
          :key="item.key"
          :label="item.displayName + '(' + item.key + ')'"
          :value="item.key"
        />
      </el-select>
      <el-select
        v-model="listQuery.sort"
        style="width: 140px"
        class="filter-item"
        @change="handleFilter"
      >
        <el-option
          v-for="item in sortOptions"
          :key="item.key"
          :label="item.label"
          :value="item.key"
        />
      </el-select>
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        {{ t("table.search") }}
      </el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate"
      >
        {{ t("table.add") }}
      </el-button>
      <el-button
        v-waves
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        icon="el-icon-download"
        @click="handleDownload"
      >
        {{ t("table.export") }}
      </el-button>
      <el-checkbox
        v-model="showReviewer"
        class="filter-item"
        style="margin-left: 15px"
        @change="tableKey = tableKey + 1"
      >
        {{ t("table.reviewer") }}
      </el-checkbox>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @sort-change="sortChange"
    >
      <el-table-column
        :label="t('table.id')"
        prop="id"
        sortable="custom"
        align="center"
        width="80"
        :class-name="getSortClass('id')"
      >
        <template #default="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.date')"
        width="180px"
        align="center"
      >
        <template #default="{row}">
          <span>{{ row.timestamp }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.title')"
        min-width="150px"
      >
        <template #default="{row}">
          <span
            class="link-type"
            @click="handleUpdate(row)"
          >{{
            row.title
          }}</span>
          <el-tag>{{ row.type }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.author')"
        width="180px"
        align="center"
      >
        <template #default="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="showReviewer"
        :label="t('table.reviewer')"
        width="110px"
        align="center"
      >
        <template #default="{row}">
          <span style="color: red">{{ row.reviewer }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.importance')"
        width="105px"
      >
        <template #default="{row}">
          <svg-icon
            v-for="n in +row.importance"
            :key="n"
            name="star"
            class="iconfont iconxing"
          />
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.readings')"
        align="center"
        width="95"
      >
        <template #default="{row}">
          <span
            v-if="row.pageviews"
            class="link-type"
            @click="handleGetPageviews(row.pageviews)"
          >{{ row.pageviews }}</span>
          <span v-else>0</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.status')"
        class-name="status-col"
        width="100"
      >
        <template #default="{row}">
          <el-tag :type="row.status">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.actions')"
        align="center"
        width="230"
        class-name="fixed-width"
      >
        <template #default="{row, $index}">
          <el-button
            type="primary"
            size="mini"
            @click="handleUpdate(row)"
          >
            {{ t("table.edit") }}
          </el-button>
          <el-button
            v-if="row.status !== 'published'"
            size="mini"
            type="success"
            @click="handleModifyStatus(row, 'published')"
          >
            {{ t("table.publish") }}
          </el-button>
          <el-button
            v-if="row.status !== 'draft'"
            size="mini"
            @click="handleModifyStatus(row, 'draft')"
          >
            {{ t("table.draft") }}
          </el-button>
          <el-button
            v-if="row.status !== 'deleted'"
            size="mini"
            type="danger"
            @click="handleDelete(row, $index)"
          >
            {{ t("table.delete") }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="total"
      v-show="total > 0"
      v-model:page="listQuery.page"
      v-model:limit="listQuery.limit"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
    />

    <el-dialog
      :title="textMap[dialogStatus]"
      v-model="dialogFormVisible"
    >
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="tempArticleModel"
        label-position="left"
        label-width="100px"
        style="width: 400px; margin-left: 50px"
      >
        <el-form-item
          :label="t('table.type')"
          prop="type"
        >
          <el-select
            v-model="tempArticleModel.type"
            class="filter-item"
            placeholder="Please select"
          >
            <el-option
              v-for="item in calendarTypeOptions"
              :key="item.key"
              :label="item.displayName"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          :label="t('table.date')"
          prop="timestamp"
        >
          <el-date-picker
            v-model="tempArticleModel.timestamp"
            type="datetime"
            placeholder="Please pick a date"
          />
        </el-form-item>
        <el-form-item
          :label="t('table.title')"
          prop="title"
        >
          <el-input v-model="tempArticleModel.title" />
        </el-form-item>
        <el-form-item :label="t('table.status')">
          <el-select
            v-model="tempArticleModel.status"
            class="filter-item"
            placeholder="Please select"
          >
            <el-option
              v-for="item in statusOptions"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="t('table.importance')">
          <el-rate
            v-model="tempArticleModel.importance"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
            :max="3"
            style="margin-top: 8px"
          />
        </el-form-item>
        <el-form-item :label="t('table.remark')">
          <el-input
            v-model="tempArticleModel.abstractContent"
            :autosize="{minRows: 2, maxRows: 4}"
            type="textarea"
            placeholder="Please input"
          />
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          {{ t("table.cancel") }}
        </el-button>
        <el-button
          type="primary"
          @click="dialogStatus === 'create' ? createData() : updateData()"
        >
          {{ t("table.confirm") }}
        </el-button>
      </div>
    </el-dialog>

    <el-dialog
      v-model:visible="dialogPageviewsVisible"
      title="Reading statistics"
    >
      <el-table
        :data="pageviewsData"
        border
        fit
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column
          prop="key"
          label="Channel"
        />
        <el-table-column
          prop="pageviews"
          label="Pageviews"
        />
      </el-table>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="dialogPageviewsVisible = false"
        >{{
          t("table.confirm")
        }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  nextTick,
  onMounted,
  unref
} from 'vue'
import { ElForm, ElMessage } from 'element-plus'
import { cloneDeep } from 'lodash'
import {
  getArticles,
  getPageviews,
  createArticle,
  updateArticle,
  defaultArticleModel
} from '@/apis/articles'
import { ArticleModel } from '@/model/articleModel'

import { exportJson2Excel } from '@/utils/excel'
import { formatJson } from '@/utils'
import { useI18n } from 'vue-i18n'
// import Pagination from '@/components/Pagination/index.vue'
export default defineComponent({
  components: {
    // Pagination
  },
  setup() {
    const { t } = useI18n()
    const calendarTypeOptions = [
      { key: 'CN', displayName: 'China' },
      { key: 'US', displayName: 'USA' },
      { key: 'JP', displayName: 'Japan' },
      { key: 'EU', displayName: 'Eurozone' }
    ]

    const calendarTypeKeyValue = calendarTypeOptions.reduce(
      (acc: { [key: string]: string }, cur) => {
        acc[cur.key] = cur.displayName
        return acc
      },
      {}
    ) as { [key: string]: string }
    const dataForm = ref(ElForm)
    const dataMap = reactive({
      tableKey: 0,
      list: Array<ArticleModel>(),
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },

      importanceOptions: [1, 2, 3],
      calendarTypeOptions: calendarTypeOptions,
      sortOptions: [
        { label: 'ID Ascending', key: '+id' },
        { label: 'ID Descending', key: '-id' }
      ],

      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },

      dialogPageviewsVisible: false,
      pageviewsData: [],
      rules: {
        type: [
          { required: true, message: 'type is required', trigger: 'change' }
        ],
        timestamp: [
          {
            required: true,
            message: 'timestamp is required',
            trigger: 'change'
          }
        ],
        title: [
          { required: true, message: 'title is required', trigger: 'blur' }
        ]
      },
      downloadLoading: false,
      tempArticleModel: defaultArticleModel,
      handleCurrentChange(page?: any) {
        dataMap.getList(page)
      },
      handleSizeChange(val: any) {
        dataMap.getList(null, null, val)
      },
      async getList(page?: any, total?: any, limit?: any) {
        if (page) {
          dataMap.listQuery.page = page
        }
        if (limit) {
          dataMap.listQuery.limit = limit
        }
        console.log(total)
        dataMap.listLoading = true
        const data = await getArticles(dataMap.listQuery)
        dataMap.list = data?.data.items ?? []
        dataMap.total = data?.data.total ?? 0

        // Just to simulate the time of the request
        setTimeout(() => {
          dataMap.listLoading = false
        }, 0.5 * 1000)
      },
      handleFilter() {
        dataMap.listQuery.page = 1
        dataMap.getList()
      },
      handleModifyStatus(row: any, status: string) {
        ElMessage.success({
          message: '操作成功',
          type: 'success'
        })
        row.status = status
      },
      sortChange(data: any) {
        const { prop, order } = data
        if (prop === 'id') {
          dataMap.sortByID(order)
        }
      },
      sortByID(order: string) {
        if (order === 'ascending') {
          dataMap.listQuery.sort = '+id'
        } else {
          dataMap.listQuery.sort = '-id'
        }
        dataMap.handleFilter()
      },
      getSortClass(key: string) {
        const sort = dataMap.listQuery.sort
        return sort === `+${key}` ? 'ascending' : 'descending'
      },
      resetTempArticleModel() {
        dataMap.tempArticleModel = cloneDeep(defaultArticleModel)
      },
      handleCreate() {
        console.log('添加了')
        dataMap.resetTempArticleModel()
        dataMap.dialogStatus = 'create'
        dataMap.dialogFormVisible = true
        nextTick(() => {
          (dataForm.value as typeof ElForm).clearValidate()
        })
      },
      createData() {
        const form = unref(dataForm)
        form.validate(async(valid: any) => {
          if (valid) {
            const ArticleModel = dataMap.tempArticleModel
            ArticleModel.id = Math.round(Math.random() * 100) + 1024 // mock a id
            ArticleModel.author = 'RCYJ_Scy'
            const addData = await createArticle(ArticleModel)

            if (addData?.data.id) {
              alert(addData.data.id)
              console.log(addData)
              dataMap.list.unshift(addData.data)
            }

            dataMap.dialogFormVisible = false
            ElMessage.success({
              message: '创建成功',
              type: 'success',
              duration: 2000
            })
          }
        })
      },

      handleUpdate(row: any) {
        dataMap.tempArticleModel = Object.assign({}, row)
        dataMap.tempArticleModel.timestamp = +new Date(
          dataMap.tempArticleModel.timestamp
        )
        dataMap.dialogStatus = 'update'
        dataMap.dialogFormVisible = true
        nextTick(() => {
          (dataForm.value as typeof ElForm).clearValidate()
        })
      },
      updateData() {
        const form = unref(dataForm)
        form.validate(async(valid: any) => {
          if (valid) {
            const tempData = Object.assign({}, dataMap.tempArticleModel)
            tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
            console.log(tempData)
            const data = await updateArticle(tempData)

            console.log(data, '-----------------')
            if (data) {
              const index = dataMap.list.findIndex(
                (v) => v.id === data.data.id
              )
              dataMap.list.splice(index, 1, data.data)
            }

            dataMap.dialogFormVisible = false
            ElMessage.success({
              message: '更新成功',
              type: 'success',
              duration: 2000
            })
          }
        })
      },
      handleDelete(row: any, index: number) {
        ElMessage.success({
          message: 'Delete Successfully',
          type: 'success',
          duration: 2000
        })
        dataMap.list.splice(index, 1)
      },
      async handleGetPageviews(pageviews: string) {
        const data = await getPageviews({ pageviews })
        dataMap.pageviewsData = data?.data.pageviews
        dataMap.dialogPageviewsVisible = true
      },
      handleDownload() {
        dataMap.downloadLoading = true
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = [
          'timestamp',
          'title',
          'type',
          'importance',
          'status'
        ]
        const data = formatJson(filterVal, dataMap.list)
        exportJson2Excel(tHeader, data, 'table-list')
        dataMap.downloadLoading = false
      },
      typeFilter: (type: string) => {
        return calendarTypeKeyValue[type]
      }
    })
    onMounted(() => {
      console.log(typeof ElForm)
      dataMap.getList(null, null, 20)
    })
    return { t, ...toRefs(dataMap), dataForm }
  }
})
</script>
