<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-23 11:03:02
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-23 11:04:08
-->
<template>
  <el-form>
    <el-form-item label="Name">
      <el-input v-model="userInfo.name" />
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="userInfo.email" />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="submit"
      >
        Update
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">

import { defineComponent, PropType, reactive, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
interface Profile {
  name: string
  email: string
  avatar: string
  roles: string
}

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<Profile>,
      default: () => {
        return {}
      }
    }
  },
  setup(props, _) {
    console.log(_)
    const dataMap = reactive({
      userInfo: props.user,
      submit: () => {
        ElMessage.success({
          message: 'User information has been updated successfully',
          type: 'success',
          duration: 5 * 1000
        })
      }

    })

    return { ...toRefs(dataMap) }
  }
})
// import { Component, Prop, Vue } from 'vue-property-decorator'
// import { IProfile } from '../index.vue'
// export default class extends Vue {
//   @Prop({ required: true }) private user!: IProfile

//   private submit() {
//     this.$message({
//       message: 'User information has been updated successfully',
//       type: 'success',
//       duration: 5 * 1000
//     })
//   }
// }
</script>
