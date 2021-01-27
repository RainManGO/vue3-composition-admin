<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-25 11:40:59
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-27 13:55:49
-->
<template>
  <div style="display:inline-block;">
    <label
      class="radio-label"
      style="padding-left:0;"
    >Filename: </label>
    <el-input
      v-model="filename"
      :placeholder="t('excel.placeholder')"
      style="width:345px;"
      prefix-icon="el-icon-document"
    />
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, computed, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  emits: ['input'],
  setup(props, ctx) {
    const dataMap = reactive({

    })
    const { t } = useI18n()
    const filename = computed({
      get: () => {
        return props.value
      },

      set: (value) => {
        ctx.emit('input', value)
      }
    })

    return { t, ...toRefs(dataMap), filename }
  }
})
</script>
