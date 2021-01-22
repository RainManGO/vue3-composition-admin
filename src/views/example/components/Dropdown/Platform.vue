<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-15 10:20:46
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-22 10:55:58
-->
<template>
  <el-dropdown
    :hide-on-click="false"
    :show-timeout="100"
    trigger="click"
  >
    <el-button plain>
      Platfroms({{ platforms.length }})
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-checkbox-group
          v-model="platforms"
          style="padding: 5px 15px;"
          @change="change"
        >
          <el-checkbox
            v-for="item in platformsOptions"
            :key="item.key"
            :label="item.key"
          >
            {{ item.name }}
          </el-checkbox>
        </el-checkbox-group>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, computed } from 'vue'
export default defineComponent({
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    }

  },
  emits: ['formDropdown'],
  setup(props, ctx) {
    const dataMap = reactive({

      platformsOptions: [
        { key: 'a-platform', name: 'a-platform' },
        { key: 'b-platform', name: 'b-platform' },
        { key: 'c-platform', name: 'c-platform' }
      ],
      platforms: computed({
        get: () => {
          return props.value
        },
        set: () => {
          ctx.emit('formDropdown', props.value)
        }
      }),
      change: (val: any) => {
        ctx.emit('formDropdown', val)
      }

    })

    return { ...toRefs(dataMap) }
  }
})
</script>
