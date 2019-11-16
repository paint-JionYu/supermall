<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'common/swiper';

export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      // 数组和对象的 defaule 必须是一个函数
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>