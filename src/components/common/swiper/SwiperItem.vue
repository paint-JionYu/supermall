<template>
  <div class="swiper-slide">
    <div><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem'
}
</script>

<style>
  .swiper-slide img {
    width: 100%;
    user-select: none;
  }
</style>