<!--
 * @Description: 社会化授权登录
 * @Author: ZY
 * @Date: 2020-12-30 16:48:55
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-04 11:48:48
-->

<template>
  <div class="social-signup-container">
    <div
      class="sign-btn"
      @click="wechatHandleClick('wechat')"
    >
      <span class="wx-svg-container">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#iconwechat" />
        </svg>

      </span>
      <span>
        微信
      </span>
    </div>
    <div
      class="sign-btn"
      @click="tencentHandleClick('tencent')"
    >
      <span class="qq-svg-container">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#iconalipay" />
        </svg>
      </span>
      <span>
        支付宝
      </span>
    </div>
  </div>
</template>

<script lang="ts">
// import openWindow from '@/utils/openWindow'
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const methods = reactive({
      wechatHandleClick: (param: string) => {
        alert('handle ' + param + ' here')
        // const appid = 'xxxxx'
        // const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
        // const url = 'https://open.weixin.qq.com/connect/qrconnect?appid=' + appid + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_login#wechat_redirect'
        // openWindow(url, 'wechat', 540, 540)
      },
      tencentHandleClick: (param: string) => {
        alert('handle ' + param + ' here')
        // const client_id = 'xxxxx'
        // const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
        // const url = 'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirect_uri
        // openWindow(url, 'tencent', 540, 540)
      }
    })
    return {
      ...toRefs(methods)
    }
  }
})
</script>

<style lang="scss" scoped>
.social-signup-container {
  margin: 20px 0;

  .sign-btn {
    display: inline-block;
    cursor: pointer;
  }

  .icon {
    color: #fff;
    font-size: 24px;
    margin-top: 8px;
  }

  .wx-svg-container,
  .qq-svg-container {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding-top: 1px;
    border-radius: 4px;
    margin-bottom: 20px;
    margin-right: 5px;
  }

  .wx-svg-container {
    background-color: #24da70;
  }

  .qq-svg-container {
    background-color: #027AFF;
    margin-left: 50px;
  }
}
</style>
