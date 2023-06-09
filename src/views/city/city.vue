<template>
  <div class="city top-page">
    <div class="top">
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="cancelClick"
      />
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <!-- 对象遍历v-for="(v,k,i) in 对象" -->
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(v, k, i) in allCities" :key="i">
        <city-group v-show="tabActive===k" :group-data="currentGroup"/>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useCityStore } from "@/stores/modules/city";
import { storeToRefs } from "pinia";

import CityGroup from "./cpns/city-group.vue";

const router = useRouter();

const searchValue = ref("");

function cancelClick() {
  router.back();
}

//请求城市数据
// const allCity=ref({})
// getCityAll().then(res=>{
//     allCity.value=res.data
// })
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);

//获取选中标签后的数据
const tabActive = ref();
//1.获取正确的key:将tabs中绑定的tabAction正确绑定
//2.根据key从allCities获取数据。默认获取的数据非响应式，所以包裹个计算属性
const currentGroup = computed(() => allCities.value[tabActive.value]);
</script>

<style lang="less" scoped>
.city {
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
