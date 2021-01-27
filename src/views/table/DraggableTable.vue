<template>
  <div class="app-container">
    <!-- Note that row-key is necessary to get a correct row order. -->
    <el-table
      ref="draggableTable"
      v-loading="listLoading"
      :data="list"
      row-key="id"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column
        align="center"
        label="ID"
        width="65"
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
        min-width="300px"
        label="Title"
      >
        <template #default="{row}">
          <span>{{ row.title }}</span>
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
            class="icon-star"
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
          <el-tag :type="row.status">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        label="Drag"
        width="80"
      >
        <svg-icon
          class="draggable-handler"
          name="drag"
          width="20"
          height="20"
        />
      </el-table-column>
    </el-table>
    <!-- $t is vue-i18n global function to translate lang (lang in @/lang)  -->
    <div class="show-d">
      <el-tag style="margin-right: 12px">
        {{ t("table.dragTips1") }} :
      </el-tag>
      {{ oldList }}
    </div>
    <div class="show-d">
      <el-tag>{{ t("table.dragTips2") }} :</el-tag> {{ newList }}
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, nextTick, onMounted, toRefs } from 'vue'
import { ArticleModel } from '@/model/articleModel'

import Sortable from 'sortablejs'
import { getArticles } from '@/apis/articles'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  setup() {
    let sortable: Sortable | null = null
    const { t } = useI18n()
    const dataMap = reactive({
      list: Array<ArticleModel>(),
      listLoading: true,
      total: 0,
      oldList: [0],
      newList: [0],
      listQuery: {
        page: 1,
        limit: 100
      },
      async getList() {
        dataMap.listLoading = true
        const data = await getArticles(this.listQuery)
        dataMap.list = data?.data.items ?? []
        setTimeout(() => {
          dataMap.listLoading = false
        }, 0.5 * 1000)
        dataMap.total = data?.data.total ?? 0
        dataMap.oldList = dataMap.list.map((v) => v.id)
        dataMap.newList = this.oldList.slice()
        nextTick(() => {
          this.setSort()
        })
      },
      setSort() {
        const el = document.querySelectorAll(
          '.el-table__body-wrapper > table > tbody'
        )[0] as HTMLElement
        sortable = Sortable.create(el, {
          ghostClass: 'sortable-ghost', // Class name for the drop placeholder
          onEnd: (evt) => {
            if (
              typeof evt.oldIndex !== 'undefined' &&
              typeof evt.newIndex !== 'undefined'
            ) {
              const targetRow = this.list.splice(evt.oldIndex, 1)[0]
              this.list.splice(evt.newIndex, 0, targetRow)
              // for show the changes, you can delete in you code
              const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
              this.newList.splice(evt.newIndex, 0, tempIndex)
            }
          }
        })
      }
    })
    onMounted(() => {
      dataMap.getList()
    })
    return { t, sortable, ...toRefs(dataMap) }
  }
})
</script>

<style lang="scss">
.sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: #42b983 !important;
}
</style>

<style lang="scss" scoped>
.icon-star {
  margin-right: 2px;
}

.draggable-handler {
  cursor: pointer;
}

.show-d {
  margin-top: 15px;
}
</style>
