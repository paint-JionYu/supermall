<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <div><a :href="item.link"><img :src="item.image" alt=""></a></div>
      <div><span>{{ item.title }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style>
  .recommend {
    display: flex;
    justify-content: space-between;
    padding: 10px 4px 25px;
    font-size: 13px;
    border-bottom: 8px solid #DEDEDE;
    text-align: center;
  }

  .recommend-item img {
    width: 65px;
    margin-bottom: 10px;
  }
</style>