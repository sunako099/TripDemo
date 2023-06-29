<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <HomeSearchBox />
    <home-categories />
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar :start-date="'09.19'" :end-date="'09.20'"/>
    </div>
    <home-content />
  </div>
</template>

<script setup>
import { useHomeStore } from "@/stores/modules/home";
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";
import homeCategories from "./cpns/home-categories.vue";
import homeContent from "./cpns/home-content.vue";
import useScroll from "@/hooks/useScroll.js";
import {watch, computed} from 'vue'
import SearchBar from '@/components/search-bar/search-bar.vue'

const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();
homeStore.fetchHouselistData();

//上拉加载
const {isReachBottom,scrollTop} =useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false
    })
  }
})

//搜索框显示的控制
// const isShowSearchBar=ref(false)
// watch(scrollTop,(newTop)=>{
//   isShowSearchBar.value=newTop>100
// })
const isShowSearchBar=computed(()=>{
  return scrollTop.value>=360
})
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;
  .banner {
    img {
      width: 100%;
    }
  }
}
.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}

</style>
