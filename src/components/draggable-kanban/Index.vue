<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-19 19:22:27
 * @LastEditors: WJM
 * @LastEditTime: 2021-01-22 13:56:00
-->
<template>
  <div class="board-column">
    <div class="board-column-header">
      {{ headerText }}
    </div>
    <draggable
      :list="list"
      v-bind="$attrs"
      class="board-column-content"
    >
      <div
        v-for="element in list"
        :key="element.id"
        class="board-item"
      >
        {{ element.name }} {{ element.id }}
      </div>
    </draggable>
  </div>
</template>

<script lang="ts">
import { VueDraggableNext } from 'vue-draggable-next'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    draggable: VueDraggableNext
  },
  props: {
    headerText: {
      type: String,
      default: 'header'
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    options: {
      type: Object,
      default: () => {
        return null
      }
    }

  },
  setup(props) {
    console.log(props)
  }
})

</script>

<style lang="scss" scoped>
.board-column {
  min-width: 300px;
  min-height: 100px;
  height: auto;
  overflow: hidden;
  background: #f0f0f0;
  border-radius: 3px;

  .board-column-header {
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    padding: 0 20px;
    text-align: center;
    background: #333;
    color: #fff;
    border-radius: 3px 3px 0 0;
  }

  .board-column-content {
    height: auto;
    overflow: hidden;
    border: 10px solid transparent;
    min-height: 60px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    .board-item {
      cursor: pointer;
      width: 100%;
      height: 64px;
      margin: 5px 0;
      background-color: #fff;
      text-align: left;
      line-height: 54px;
      padding: 5px 10px;
      box-sizing: border-box;
      box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
