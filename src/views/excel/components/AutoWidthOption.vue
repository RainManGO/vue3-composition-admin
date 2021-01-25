<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-25 11:40:38
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-25 11:40:39
-->
<template>
  <div style="display:inline-block;">
    <label class="radio-label">Cell Auto-Width: </label>
    <el-radio-group v-model="autoWidth">
      <el-radio
        :label="true"
        border
      >
        True
      </el-radio>
      <el-radio
        :label="false"
        border
      >
        False
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  emits: ['input'],
  setup(props, ctx) {
    const autoWidth = computed({
      get: () => {
        return props.value
      },
      set: (val) => {
        ctx.emit('input', val)
      }
    })

    return { autoWidth }
  }
})

</script>
