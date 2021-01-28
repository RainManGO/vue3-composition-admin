<!--
 * @Description: 登录页面
 * @Author: ZY
 * @Date: 2020-12-28 16:27:50
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-28 16:32:33
-->

<template>
  <div class="login-container">
    <video
      poster="../../../assets/images/login/video-cover.jpeg"
      loop
      autoplay
      muted
    >
      <source src="../../../assets/images/login/night.mp4">
    </video>

    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">
          {{ t("login.title") }}
        </h3>
        <LangSelect
          :isWhite="true"
          class="set-language"
        />
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <i class="el-icon-user" />
        </span>
        <el-input
          ref="userNameRef"
          v-model="loginForm.username"
          :placeholder="t('login.username')"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual
      >
        <el-form-item prop="password">
          <span class="svg-container">
            <i class="el-icon-lock" />
          </span>
          <el-input
            :key="passwordType"
            ref="passwordRef"
            v-model="loginForm.password"
            :type="passwordType"
            :placeholder="t('login.password')"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter="handleLogin"
          />
          <span
            class="show-pwd"
            @click="showPwd"
          >
            <svg-icon
              :name="passwordType === 'password' ? 'eye-off' : 'eye-on'"
            />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button
        :loading="loading"
        type="primary"
        style="width:100%; margin-bottom:30px;"
        @click.prevent="handleLogin"
      >
        {{ t("login.logIn") }}
      </el-button>

      <div style="position:relative">
        <div class="tips">
          <span>{{ t("login.username") }} : admin </span>
          <span>{{ t("login.password") }} : {{ t("login.any") }} </span>
        </div>
        <div class="tips">
          <span>{{ t("login.username") }} : editor </span>
          <span>{{ t("login.password") }} : {{ t("login.any") }} </span>
        </div>

        <el-button
          class="thirdparty-button"
          type="primary"
          @click="showDialog = true"
        >
          {{ t("login.thirdparty") }}
        </el-button>
      </div>
    </el-form>

    <el-dialog
      :title="t('login.thirdparty')"
      v-model="showDialog"
    >
      {{ t("login.thirdpartyTips") }}
      <br>
      <br>
      <br>
      <SocialSign />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  watch,
  ref,
  nextTick,
  toRefs
} from 'vue'
import LangSelect from '@/components/lang_select/Index.vue'
import SocialSign from './components/SocialSignin.vue'
import { isValidUsername } from '@/utils/validate'
import { useRoute, LocationQuery, useRouter } from 'vue-router'
import { useStore } from '@/store'
import { UserActionTypes } from '@/store/modules/user/action-types'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  components: {
    LangSelect,
    SocialSign
  },
  setup() {
    const userNameRef = ref(null)
    const passwordRef = ref(null)
    const loginFormRef = ref(null)
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const { t } = useI18n()
    const state = reactive({
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ validator: userNameRef, trigger: 'blur' }],
        password: [{ validator: passwordRef, trigger: 'blur' }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      capsTooltip: false,
      redirect: '',
      otherQuery: {}
    })

    const methods = reactive({
      validateUsername: (rule: any, value: string, callback: Function) => {
        if (!isValidUsername(value)) {
          callback(new Error('Please enter the correct user name'))
        } else {
          callback()
        }
      },
      validatePassword: (rule: any, value: string, callback: Function) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      },
      checkCapslock: (e: KeyboardEvent) => {
        const { key } = e
        state.capsTooltip =
          key !== null && key.length === 1 && key >= 'A' && key <= 'Z'
      },
      showPwd: () => {
        if (state.passwordType === 'password') {
          state.passwordType = ''
        } else {
          state.passwordType = 'password'
        }
        nextTick(() => {
          (passwordRef.value as any).focus()
        })
      },
      handleLogin: () => {
        (loginFormRef.value as any).validate(async(valid: boolean) => {
          if (valid) {
            state.loading = true
            await store.dispatch(UserActionTypes.ACTION_LOGIN, state.loginForm)
            router
              .push({
                path: state.redirect || '/',
                query: state.otherQuery
              })
              .catch(err => {
                console.warn(err)
              })
            // Just to simulate the time of the request
            setTimeout(() => {
              state.loading = false
            }, 0.5 * 1000)
          } else {
            return false
          }
        })
      }
    })

    function getOtherQuery(query: LocationQuery) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {} as LocationQuery)
    }

    watch(() => route.query, query => {
      if (query) {
        state.redirect = query.redirect?.toString() ?? ''
        state.otherQuery = getOtherQuery(query)
      }
    })

    onMounted(() => {
      if (state.loginForm.username === '') {
        (userNameRef.value as any).focus()
      } else if (state.loginForm.password === '') {
        (passwordRef.value as any).focus()
      }
    })

    return {
      userNameRef,
      passwordRef,
      loginFormRef,
      ...toRefs(state),
      ...toRefs(methods),
      t
    }
  }
})
</script>

<style lang="scss">
// References: https://www.zhangxinxu.com/wordpress/2018/01/css-caret-color-first-line/
@supports (-webkit-mask: none) and (not (cater-color: $loginCursorColor)) {
  .login-container .el-input {
    input {
      color: $loginCursorColor;
    }
    input::first-line {
      color: $lightGray;
    }
  }
}

.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      height: 47px;
      background: transparent;
      border: 0px;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $lightGray;
      caret-color: $loginCursorColor;
      -webkit-appearance: none;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $loginBg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  // background-color: $loginBg;
  video {
    position: absolute;
    /* Vertical and Horizontal center*/
    top: 0; left: 0; right: 0; bottom: 0;
    width:100%;
    height:100%;
    object-fit: cover;
    z-index: -1;
  }
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $darkGray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $lightGray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .set-language {
      color: #fff;
      position: absolute;
      top: 3px;
      font-size: 18px;
      right: 0px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $darkGray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
