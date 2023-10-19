<script setup lang="ts">
import type { CategoryItem } from '@/types/home'

// 定义 props 接收数据
defineProps<{
  list: CategoryItem[]
}>()
</script>

<template>
  <view class="category">
    <navigator
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
      v-for="item in list"
      :key="item.id"
    >
      <image class="icon" :src="item.icon"></image>
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<style lang="scss">
@import '../styles/category.scss';
//me
// .category {
//   display: flex;
//   flex-wrap: wrap;
//   margin: 20rpx 0rpx;
//   .category-item {
//     width: 150rpx;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 10rpx 0;

//     .icon {
//       width: 100rpx;
//       height: 100rpx;
//     }
//     .text {
//       font-size: 26rpx;
//       color: #666;
//     }
//   }
// }
</style>
