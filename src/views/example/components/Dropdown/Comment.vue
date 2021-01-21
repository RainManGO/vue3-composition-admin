<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-14 15:02:29
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-14 16:26:39
-->
<template>
  <el-dropdown
    :show-timeout="100"
    trigger="click"
  >
    <el-button plain>
      {{ !disableComment?'Comment: opened':'Comment: closed' }}
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>
    <template #dropdown>
      <el-dropdown-menu
        class="no-padding"
      >
        <el-dropdown-item>
          <el-radio-group
            v-model="disableComment"
            style="padding: 10px;"
          >
            <el-radio :label="true">
              Close comment
            </el-radio>
            <el-radio :label="false">
              Open comment
            </el-radio>
          </el-radio-group>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">

import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  emits: ['input'],
  setup(_, ctx) {
    const data = reactive({
      disableComment: {
        get() {
          return _.value
        },
        set() {
          ctx.emit('input', _.value)
        }
      }
    })

    return { ...toRefs(data) }
  }
})
</script>
