<template name="skeleton">
  <view class="sk-container">
    <view class="viewport">
      <view is="components/XtxSwiper">
        <view class="carousel XtxSwiper--carousel">
          <swiper></swiper>
          <view class="indicator XtxSwiper--indicator">
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
          </view>
        </view>
      </view>
      <view is="pages/index/components/CategoryPanel">
        <view class="category CategoryPanel--category">
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-167 sk-text"
            ></text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-830 sk-text"
            ></text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-735 sk-text"
            ></text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-254 sk-text"
            ></text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-317 sk-text"
            ></text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-307 sk-text"
            ></text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-592 sk-text"
            ></text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-490 sk-text"
            ></text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-256 sk-text"
            ></text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-105 sk-text"
            ></text>
          </navigator>
        </view>
      </view>
      <view is="pages/index/components/HotPanel">
        <view class="panel HotPanel--panel hot HotPanel--hot">
          <view class="item HotPanel--item">
            <view class="title HotPanel--title">
              <text
                class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-600 sk-text"
              ></text>
              <text
                class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-990 sk-text"
              ></text>
            </view>
            <navigator class="cards HotPanel--cards" hover-class="none">
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item HotPanel--item">
            <view class="title HotPanel--title">
              <text
                class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-792 sk-text"
              ></text>
              <text
                class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-69 sk-text"
              ></text>
            </view>
            <navigator class="cards HotPanel--cards" hover-class="none">
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item HotPanel--item">
            <view class="title HotPanel--title">
              <text
                class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-789 sk-text"
              ></text>
              <text
                class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-725 sk-text"
              ></text>
            </view>
            <navigator class="cards HotPanel--cards" hover-class="none">
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item HotPanel--item">
            <view class="title HotPanel--title">
              <text
                class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-273 sk-text"
              ></text>
              <text
                class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-871 sk-text"
              ></text>
            </view>
            <navigator class="cards HotPanel--cards" hover-class="none">
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
