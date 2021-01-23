<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-23 11:03:44
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-23 11:03:44
-->
<template>
  <el-card style="margin-bottom:20px;">
    <template #header>
      <div
        class="clearfix"
      >
        <span>About me</span>
      </div>
    </template>

    <div class="user-profile">
      <div class="box-center">
        <PanThumb
          :image="user.avatar"
          :height="'100px'"
          :width="'100px'"
          :hoverable="false"
        >
          <div>Hello</div>
          {{ user.roles }}
        </PanThumb>
      </div>
      <div class="box-center">
        <div class="user-name text-center">
          {{ user.name }}
        </div>
        <div class="user-role text-center text-muted">
          {{ user.roles }}
        </div>
      </div>
    </div>

    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header">
          <svg-icon name="education" /><span>Education</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            JS in Computer Science from the University of Technology
          </div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <svg-icon name="skill" /><span>Skills</span>
        </div>
        <div class="user-bio-section-body">
          <div class="progress-item">
            <span>Vue</span>
            <el-progress :percentage="51" />
          </div>
          <div class="progress-item">
            <span>Typescript</span>
            <el-progress :percentage="45" />
          </div>
          <div class="progress-item">
            <span>Css</span>
            <el-progress :percentage="4" />
          </div>
          <div class="progress-item">
            <span>ESLint</span>
            <el-progress
              :percentage="100"
              status="success"
            />
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import PanThumb from '@/components/pan-thumb/Index.vue'
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
  components: {
    PanThumb
  },
  setup() {
    console.log('=')
  }
})
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
