<template>
  <div class="components-container">
    <el-button
      type="primary"
      @click="dialogTableVisible=true"
    >
      Open a Draggable Dialog
    </el-button>
    <el-dialog
      v-elDraggableDialog
      v-model="dialogTableVisible"
      title="Shipping address"
    >
      <el-select
        ref="select"
        v-model="value"
        placeholder="Please select"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-table :data="gridData">
        <el-table-column
          property="date"
          label="Date"
          width="150"
        />
        <el-table-column
          property="name"
          label="Name"
          width="200"
        />
        <el-table-column
          property="address"
          label="Address"
        />
      </el-table>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { reactive, defineComponent, toRefs, onMounted } from 'vue'
import { elDraggableDialog } from '@/directives/el-draggable-dialog/index'
console.log(elDraggableDialog)
export default defineComponent({
  directives: {
    'v-elDraggableDialog': elDraggableDialog
  },
  setup() {
    const dataMap = reactive({
      dialogTableVisible: false,
      value: '',
      options: [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' }
      ],
      gridData: [{
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }]

    })
    onMounted(() => {
      const dragDom = document.querySelector('.el-dialog') as HTMLElement
      const dialogHeaderEl = document.querySelector('.el-dialog__header') as HTMLElement
      dragDom.style.backgroundColor = '#eeeeee'
      dragDom.style.cssText = ''
      dialogHeaderEl.style.cssText += ';cursor:move'
      dialogHeaderEl.onmousedown = (e: any) => {
        const disX = e.clientX - dialogHeaderEl.offsetLeft
        const disY = e.clientY - dialogHeaderEl.offsetTop

        const dragDomWidth = dragDom.offsetWidth
        const dragDomHeight = dragDom.offsetHeight

        const screenWidth = document.body.clientWidth
        const screenHeight = document.body.clientHeight

        const minDragDomLeft = dragDom.offsetLeft
        const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth

        const minDragDomTop = dragDom.offsetTop
        const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight

        const styleLeftStr = getComputedStyle(dragDom).left
        const styleTopStr = getComputedStyle(dragDom).top
        if (!styleLeftStr || !styleTopStr) return
        let styleLeft: number
        let styleTop: number

        // Format may be "##%" or "##px"
        if (styleLeftStr.includes('%')) {
          styleLeft = +document.body.clientWidth * (+styleLeftStr.replace(/%/g, '') / 100)
          styleTop = +document.body.clientHeight * (+styleTopStr.replace(/%/g, '') / 100)
        } else {
          styleLeft = +styleLeftStr.replace(/px/g, '')
          styleTop = +styleTopStr.replace(/px/g, '')
        }

        document.onmousemove = (e) => {
          let left = e.clientX - disX
          let top = e.clientY - disY

          // Handle edge cases
          if (-(left) > minDragDomLeft) {
            left = -minDragDomLeft
          } else if (left > maxDragDomLeft) {
            left = maxDragDomLeft
          }
          if (-(top) > minDragDomTop) {
            top = -minDragDomTop
          } else if (top > maxDragDomTop) {
            top = maxDragDomTop
          }

          // Move current element
          dragDom.style.cssText += `;left:${left + styleLeft}px;top:${top + styleTop}px;`

          // Emit on-dialog-drag event
          // See https://stackoverflow.com/questions/49264426/vuejs-custom-directive-emit-event
        //   if (vnode.component) {
        //     vnode.component.emit('on-dialog-drag')
        //   } else if (vnode.el) {
        //     vnode.el.dispatchEvent(new CustomEvent('on-dialog-drag'))
        //   }
        }

        document.onmouseup = () => {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    })
    return { ...toRefs(dataMap) }
  }
})
</script>
<style lang="scss" scoped>
.test{
    width: 200px;
    height: 200px;
    background-color: #eeeeee;
}
</style>
