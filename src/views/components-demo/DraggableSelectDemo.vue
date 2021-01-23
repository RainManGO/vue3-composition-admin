<!--
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-18 17:28:28
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-22 13:44:17
-->
<template>
  <div class="components-container">
    <draggable-select
      :value="value"
      style="width:500px;"
      multiple
      placeholder="Please select"
      @changeVal="changeVal"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </draggable-select>
    <div style="margin-top:30px;">
      <el-tag
        v-for="item of value"
        :key="item"
        style="margin-right:15px;"
      >
        {{ item }}
      </el-tag>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import draggableSelect from '@/components/draggable-select/Index.vue'

export default defineComponent({
  components: {
    draggableSelect
  },
  setup() {
    const state = reactive({
      value: ['Apple', 'Banana', 'Orange'],
      options: [
        {
          value: 'Apple',
          label: 'Apple'
        },
        {
          value: 'Banana',
          label: 'Banana'
        },
        {
          value: 'Orange',
          label: 'Orange'
        },
        {
          value: 'Pear',
          label: 'Pear'
        },
        {
          value: 'Strawberry',
          label: 'Strawberry'
        }
      ],
      changeVal: (val: any) => {
        state.value = val
      }
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
