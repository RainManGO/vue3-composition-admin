<!--
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-20 11:49:00
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-21 15:46:34
-->
<template>
  <el-select
    ref="draggableSelect"
    v-model="selectVal"
    multiple
    filterable
    allow-create
    default-first-option
    @change="changeselect"
    class="draggable-select"
  >
    <slot />
  </el-select>
</template>

<script lang="ts">
import Sortable from 'sortablejs'
import { computed, defineComponent, onMounted, ref, unref } from 'vue'
import { ElSelect } from 'element-plus'

export default defineComponent({
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  emits: ['changeVal'],
  setup(props, contex) {
    let sortable: Sortable | null = null
    const changeselect = (val: any) => {
      contex.emit('changeVal', [...val])
    }
    const propsValue = unref(props.value)
    const selectVal = computed({
      get: () => {
        return [...props.value]
      },
      set: (value) => {
        contex.emit('changeVal', [...value])
      }
    })
    onMounted(() => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      setSort()
    })
    const draggableSelect = ref(ElSelect)
    const setSort = () => {
      const draggable = unref(draggableSelect)
      const el = draggable.$el.querySelectorAll('.el-select__tags > span')[0]
      sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost', // Class name for the drop placeholder
        onEnd: evt => {
          if (typeof (evt.oldIndex) !== 'undefined' && typeof (evt.newIndex) !== 'undefined') {
            const targetRow = propsValue.splice(evt.oldIndex, 1)[0]
            propsValue.splice(evt.newIndex, 0, targetRow)
          }
        }
      })
    }
    return {
      sortable,
      changeselect,
      propsValue,
      selectVal,
      draggableSelect,
      setSort
    }
  }
})

</script>

<style lang="scss">
.draggable-select .sortable-ghost {
  opacity: .8;
  color: #fff!important;
  background: #42b983!important;
}
.el-select .el-select__tags .el-tag {
  cursor: pointer;
}
</style>
