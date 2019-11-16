<template>
  <div class="tabbar-item">
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeColorStyle"><slot name="item-text"></slot></div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
      flag: false
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick() {
      console.log(this.path);
      // 为什么 this.path 能拿到四个值？因为我们实例了四个组件，又给四个组件传了path值
      if (this.$route.path !== this.path) { // 处理双击报错
        this.$router.push(this.path); 
      }
    }
  },
  computed: {
    isActive() {
      return this.flag = this.path === this.$route.path ? true : false;
    },
    activeColorStyle() {
      return this.flag ? {color: this.activeColor} : {};
    }
  }
}
</script>

<style>
  .tabbar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .tabbar-item img {
    width: 27px;
    margin-top: 3px;
  }

  .tabbar-item p {
    width: 100%;
    margin-top: 1px;
  }
</style>