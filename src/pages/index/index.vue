<script setup lang="ts">
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import Skeleton from './skeleton.vue'
import XtxSwiper from '@/components/XtxSwiper.vue' //easycom 未生效 temp
import XtxGuess from '@/components/XtxGuess.vue' //easycom 未生效 temp
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { useGuessList } from '@/composables'
import type { XtxGuessInstance } from '@/types/component'
const isLoad = ref(false)
//
const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])
const getBannerData = async () => {
  const res = await getHomeBannerAPI(1)
  bannerList.value = res.result
}
const getCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
const getHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}
const isTriggered = ref(false)
const { guessRef, onRefreshData, onScrolltolower } = useGuessList()

//ref InstanceType写法  or 上面封装
// export type XtxGuessInstance = InstanceType<typeof XtxGuess>
// const guessRef = ref<null | XtxGuessInstance>(null)
//或
//const guessRef = ref<XtxGuessInstance>()
// const onScrolltolower = async () => {
//   guessRef.value?.getMore()
// }

const onRefresh = async () => {
  isTriggered.value = true
  // guessRef.value?.resetData()
  await Promise.all([getBannerData(), getCategoryData(), getHotData(), onRefreshData()])
  isTriggered.value = false
}

onLoad(async () => {
  isLoad.value = true
  await Promise.all([getBannerData(), getCategoryData(), getHotData(), onRefreshData()])
  isLoad.value = false
})
</script>

<template>
  <view class="viewport">
    <custom-navbar></custom-navbar>
    <scroll-view
      enable-back-to-top
      refresher-enabled
      @refresherrefresh="onRefresh"
      :refresher-triggered="isTriggered"
      @scrolltolower="onScrolltolower"
      class="scroll-view"
      scroll-y
    >
      <Skeleton v-if="isLoad"></Skeleton>
      <template v-else>
        <xtx-swiper :list="bannerList"></xtx-swiper>
        <category-panel :list="categoryList"></category-panel>
        <hot-panel :list="hotList"></hot-panel>
        <xtx-guess ref="guessRef"></xtx-guess>
      </template>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}

//
</style>
