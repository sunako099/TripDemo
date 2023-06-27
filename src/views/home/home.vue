<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearchBox/>
  </div>
</template>

<script setup>
import HomeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox  from './cpns/home-search-box.vue'


//发送网络请求
//1.热门建议
// const hotSuggests=ref([])
// SRequest.get({
//   url:"/home/hotSuggests"
// }).then(res=>{
//   hotSuggests.value=res.data
// })
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}

</style>