<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-15 10:21:00
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-21 15:14:19
-->
<template>
  <el-dropdown
    :show-timeout="100"
    trigger="click"
  >
    <el-button plain>
      Link
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>
    <template #dropdown>
      <el-dropdown-menu
        class="no-padding"
        style="width:400px"
      >
        <el-form-item
          label-width="0px"
          style="margin-bottom: 0px"
          prop="sourceURL"
        >
          <el-input
            v-model="sourceURL"
            placeholder="Please enter the content"
          >
            <template #prepend>
              URL
            </template>
          </el-input>
        </el-form-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">

import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  emits: ['input'],
  setup(props, ctx) {
    const sourceURL = computed({
      get: () => {
        return props.value
      },
      set: (value) => {
        ctx.emit('input', value)
      }
    }

    )
    return { sourceURL }
  }
})
// export default class extends Vue {
//   @Prop({ required: true }) private value!: string

//   get sourceURL() {
//     return this.value
//   }

//   set sourceURL(value) {
//     this.$emit('input', value)
//   }
// }
</script>
