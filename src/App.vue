<!--
 * @Description:
 * @Autor: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: SCY
 * @LastEditTime: 2021-04-06 10:11:53
-->
<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>
<style lang="scss">
.el-menu-item:hover{
  outline: 0 !important;
  color: #409EFF !important;
}

.el-submenu__title:focus, .el-submenu__title:hover{
  outline: 0 !important;
  color: #fff !important;
  background: #435EBE !important;
  border-radius: 8px !important;
}
.el-menu-item:hover{
   outline: 0 !important;
  color: #fff !important;
  background: #435EBE !important;
  border-radius: 8px !important;
}
</style>
