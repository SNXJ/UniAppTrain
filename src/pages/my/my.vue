<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { http } from '@/utils/http'

const memberStore = useMemberStore()
const myRequest = async () => {
  const re = await http({
    url: 'hhhh',
    method: 'GET',
    success: (res) => {
      uni.showToast({
        title: 'request',
        icon: 'success',
      })
    },
    fail: (fail) => {
      uni.showToast({
        title: '失败',
        icon: 'fail',
      })
    },
  })
  uni.showToast({
    title: '结束',
    icon: 'none',
  })
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button @tap="
      memberStore.setProfile({
        nickname: '存储nickname',
        token: '00000000',
      })
      " size="mini" plain type="primary">
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @click="myRequest()" plain type="primary">
      请求
    </button>
  </view>
</template>

<style lang="scss">
//
</style>
