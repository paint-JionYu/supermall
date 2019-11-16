<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar_active/home.svg" alt="">
      <p slot="item-text">首页</p>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar_active/category.svg" alt="">
      <p slot="item-text">分类</p>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/images/tabbar/cart.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar_active/cart.svg" alt="">
      <p slot="item-text">购物车</p>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar_active/profile.svg" alt="">
      <p slot="item-text">个人</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'common/tabbar/TabBar';
import TabBarItem from 'common/tabbar/TabBarItem';

export default {
  name: 'mainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>