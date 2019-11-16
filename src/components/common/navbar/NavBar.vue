<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
  .nav-bar {
    display: flex;
    width: 100%;
    height: 44px;
    line-height: 44px;
  }

  .nav-bar .left, .nav-bar .center, .nav-bar .right {
    width: 60px;
    height: 100%;
  }

  .nav-bar .center {
    flex-grow: 1;
  }

  .nav-bar .center {
    text-align: center;
  }
</style>

