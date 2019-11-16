<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titles" 
    @click="itemClick(index)" :class="{active: currentIndex == index}">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabControl',
  data() {
    return {
      currentIndex: 0,
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    height: 40px;
    line-height: 40px;
    margin: 5px 0;
    text-align: center;
    background: #fff;
  }

  .tab-control-item {
    flex: 1;
    font-size: 15px;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active span {
    border-bottom: 3px solid var(--color-pink);
    color: var(--color-pink);
  }
</style>