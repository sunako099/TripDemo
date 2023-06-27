<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearchBox/>
    <home-categories/>
    <home-content/>
    <button @click="more">杀杀杀杀杀杀杀杀杀杀杀杀杀杀杀</button>
  </div>
</template>

<script setup>
import { useHomeStore } from '@/stores/modules/home';
import HomeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox  from './cpns/home-search-box.vue'
import homeCategories from './cpns/home-categories.vue'
import homeContent from './cpns/home-content.vue';

const homeStore=useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()
//发送网络请求
//1.热门建议
// const hotSuggests=ref([])
// SRequest.get({
//   url:"/home/hotSuggests"
// }).then(res=>{
//   hotSuggests.value=res.data
// })

//默认加载更多
function more(){
  console.log("加载更多");
}

</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}

</style>