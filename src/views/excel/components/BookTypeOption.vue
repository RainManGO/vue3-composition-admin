<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-25 11:40:50
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-29 09:42:34
-->
<template>
  <div style="display:inline-block;">
    <label class="radio-label">Book Type: </label>
    <el-select
      v-model="bookType"
      style="width:120px;"
      @change="booktypeChange"
    >
      <el-option
        v-for="item in options"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, toRefs, computed } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: ''
    }

  },
  emits: ['changeinput'],
  setup(props, ctx) {
    const dataMap = reactive({
      options: [
        'xlsx', 'csv', 'txt'
      ]
    })

    const bookType = computed({
      get: () => {
        return props.value
      },
      set: (value) => {
        ctx.emit('changeinput', value)
      }
    })

    const booktypeChange = (value: any) => {
      console.log(value)
      ctx.emit('changeinput', value)
    }
    return { ...toRefs(dataMap), bookType, booktypeChange }
  }
})
</script>
