<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9645" :sticky-offset-top=-1 :index-list="indexList">
        <van-index-anchor index="热门" />
        <div class="list">
            <template v-for="(city,index) in groupData.hotCities">
                <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
            </template>
        </div>



      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>

    <!-- <template v-for="(group, index) in groupData.cities" :key="index">
      <div class="group-item">
        <h2 class="title">标题：{{ group.group }}</h2>
        <div class="list">
          <template v-for="(city, indey) in group.cities" :key="indey">
            <div class="city">
              {{ city.cityName }}
            </div>
          </template>
        </div>
      </div>
    </template> -->
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useCityStore } from "@/stores/modules/city";

//定义props
const props=defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

//计算动态的右侧快速检索索引
const indexList=computed(()=>{
    const list=props?.groupData?.cities?.map(item => item.group)
    list?.unshift('#')
    return list
})

//监听城市的点击
const router=useRouter()
const cityStore=useCityStore()
function cityClick(city){
    //获取当前选中的城市存入pinia
    cityStore.currentCity=city
    //返回上一级路由
    router.back()
}
</script>
    
<style lang="less" scoped>
    .list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 10px;
        padding-right: 25px;

        .city {
            width: 70px;
            height: 28px;
            margin: 6px 0;
            border-radius: 14px;
            font-style: 12px;
            color: #000;
            text-align: center;
            line-height: 28px;
            background-color: #fff4ec;
        }
    }
</style>
