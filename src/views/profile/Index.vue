<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-23 11:02:49
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-23 11:02:50
-->
<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">
        <el-col
          :span="6"
          :xs="24"
        >
          <UserCard :user="user" />
        </el-col>
        <el-col
          :span="18"
          :xs="24"
        >
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane
                label="Activity"
                name="activity"
              >
                <Activity />
              </el-tab-pane>
              <el-tab-pane
                label="Timeline"
                name="timeline"
              >
                <Timeline />
              </el-tab-pane>
              <el-tab-pane
                label="Account"
                name="account"
              >
                <Account :user="user" />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { reactive, defineComponent, toRefs, onMounted } from 'vue'
import Account from './components/Account.vue'
import Activity from './components/Activity.vue'
import Timeline from './components/Timeline.vue'
import UserCard from './components/UserCard.vue'
 interface Profile {
  name: string
  email: string
  avatar: string
  roles: string
}
export default defineComponent({
  components: {
    Account,
    Activity,
    Timeline,
    UserCard
  },
  setup() {
    const defaultProfile: Profile = {
      name: 'Yours Extra.',
      email: 'Loading...',
      avatar: 'Loading...',
      roles: 'Loading...'
    }
    const store = useStore()
    const dataMap = reactive({

      user: defaultProfile,
      activeTab: 'activity',

      name: () => {
        return store.state.user.name
      },

      email() {
        return store.state.user.email
      },
      avatar() {
        return store.state.user.avatar
      },
      roles() {
        return store.state.user.roles
      },
      getUser: () => {
        dataMap.user = {
          name: dataMap.name(),
          email: dataMap.email(),
          avatar: dataMap.avatar(),
          roles: dataMap.roles().join(' | ')
        }
      }

    })

    onMounted(() => {
      dataMap.getUser()
    })

    return { ...toRefs(dataMap) }
  }
})
// import { Component, Vue } from 'vue-property-decorator'
// import { UserModule } from '@/store/modules/user'

// const defaultProfile: IProfile = {
//   name: 'Loading...',
//   email: 'Loading...',
//   avatar: 'Loading...',
//   roles: 'Loading...'
// }

// @Component({
//   name: 'Profile',
//   components: {
//     Account,
//     Activity,
//     Timeline,
//     UserCard
//   }
// })
// export default class extends Vue {
//   private user = defaultProfile
//   private activeTab = 'activity'

//   get name() {
//     return UserModule.name
//   }

//   get email() {
//     return UserModule.email
//   }

//   get avatar() {
//     return UserModule.avatar
//   }

//   get roles() {
//     return UserModule.roles
//   }

//   created() {
//     this.getUser()
//   }

//   private getUser() {
//     this.user = {
//       name: this.name,
//       email: this.email,
//       avatar: this.avatar,
//       roles: this.roles.join(' | ')
//     }
//   }
// }
</script>
