<!--
 * @Description: 大小选择
 * @Author: ZY
 * @Date: 2020-12-24 09:59:06
 * @LastEditors: SCY
 * @LastEditTime: 2021-04-02 14:32:50
-->
<template>
  <div>
    <el-dropdown
      id="size-select"
      trigger="click"
      @command="handleSetSize"
    >
      <div>
        <svg
          class="icon"
          aria-hidden="true"
          font-size="40px"
        >
          <use xlink:href="#iconshiliangzhinengduixiang" />
        </svg>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item of sizeOptions"
            :key="item.value"
            :disabled="size===item.value"
            :command="item.value"
          >
            {{
              item.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div />
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { AppActionTypes } from '@/store/modules/app/action-types'
import { TagsActionTypes } from '@/store/modules/tagsview/action-types'
import { defineComponent, reactive, nextTick, toRefs, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const { fullPath } = useRoute()
    const router = useRouter()
    function refreshView() {
      useStore().dispatch(TagsActionTypes.ACTION_DEL_ALL_CACHED_VIEWS, undefined)
      nextTick(() => {
        router.replace({ path: '/redirect' + fullPath }).catch((err) => {
          console.warn(err)
        })
      })
    }
    const state = reactive({
      sizeOptions: [
        { label: 'Default', value: 'default' },
        { label: 'Medium', value: 'medium' },
        { label: 'Small', value: 'small' },
        { label: 'Mini', value: 'mini' }
      ],
      handleSetSize: (size: string) => {
        useStore().dispatch(AppActionTypes.ACTION_SET_SIZE, size)
        refreshView()
        ElMessage.success('Switch Size Success')
      }
    })
    const size = computed(() => {
      return useStore().state.app.size
    })
    return {
      ...toRefs(state),
      size
    }
  }
})
</script>
