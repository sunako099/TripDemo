<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbarData">
      <div class="tab-bar-item" :class="{active:currentIndex===index}" @click="itemClick(index,item)">
        <img v-if="currentIndex!==index" :src="getAssetURL(item.img)" alt="圖片" />
        <img v-else :src="getAssetURL(item.imgActive)" alt="圖片" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar";
import { getAssetURL } from "@/utils/load_assets";
import {ref, watch} from "vue"
import {useRoute, useRouter} from "vue-router"

const route=useRoute()
const currentIndex=ref(0)
watch(route,(newRoute)=>{
  const index=tabbarData.findIndex(item=>item.path===newRoute.path)
  if(index===-1) return
  currentIndex.value=index
})
const router=useRouter()
function itemClick(index,item){
    currentIndex.value=index
    router.push(item.path)
}
</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;
  
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;

    &.active{
        color: var(--primary-color);
    }
  }

  img {
    width: 36px;
  }
  .text {
    font-size: 12px;
    margin-top: 2px;
  }
}
</style>
