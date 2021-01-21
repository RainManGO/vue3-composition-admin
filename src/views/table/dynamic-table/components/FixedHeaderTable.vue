<template>
  <div class="app-container">
    <div class="filter-container">
      <el-checkbox-group v-model="checkboxVal">
        <el-checkbox label="apple">
          apple
        </el-checkbox>
        <el-checkbox label="banana">
          banana
        </el-checkbox>
        <el-checkbox label="orange">
          orange
        </el-checkbox>
      </el-checkbox-group>
    </div>

    <el-table
      :key="key"
      :data="tableData"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label="fruitName"
        width="180"
      />
      <el-table-column
        v-for="fruit in formThead"
        :key="fruit"
        :label="fruit"
      >
        <template #default="{row}">
          {{ row[fruit] }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, toRefs, watch } from 'vue'

const defaultFormThead = ['apple', 'banana']
export default defineComponent({

  setup() {
    const dataMap = reactive({
      tableData: [
        {
          name: 'fruit-1',
          apple: 'apple-10',
          banana: 'banana-10',
          orange: 'orange-10'
        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20'
        }
      ],
      key: 1, // Table key
      formTheadOptions: ['apple', 'banana', 'orange'],
      checkboxVal: defaultFormThead,
      formThead: defaultFormThead // Default header
    })

    watch(() => dataMap.checkboxVal, (value: string[]) => {
      console.log('----------------------')
      dataMap.formThead = dataMap.formTheadOptions.filter(i => value.indexOf(i) >= 0)
      dataMap.key = dataMap.key + 1 // Ensure the table will be re-rendered each time
    })

    return { ...toRefs(dataMap) }
  }

})
</script>
