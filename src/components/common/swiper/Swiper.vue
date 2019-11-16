<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: 'swiper',
  data() {
    return {
      disableOnInteraction: false,
    }
  },
  updated() {
    this.$nextTick(() => {
      new Swiper('.swiper-container', {
        direction: 'horizontal', // 
        loop: true, // 循环模式选项

        speed: 400, // 切换速度
        autoplay: { // 自动播放
          disableOnInteraction: false,
          delay: 3000
        },
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
    })
  },
  components: {
    
  }
}
</script>

<style>
  @import './css/swiper.min.css';
</style>

