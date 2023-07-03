<template>
  <div class="detail top-page" ref="detailRef">
    <tab-control 
      v-if="showTabControl"
      class="tabs"
      :titles="['sd','f','ggg']"
    />
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
      <detail-infos name="描述" :ref="getSectionRef" :top-infos="mainPart.topModule"/>
      <detail-facility name="设施" :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule"/>
      <detail-comment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule"/>
      <detail-notice name="须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules"/>
      <detail-map name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"/>
      <detail-intro :price-intro="mainPart.introductionModule"/>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">旅途漫漫, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import { useRoute,useRouter } from 'vue-router';
import {getDetailInfos} from "@/services"
import { computed, ref } from 'vue';
import DetailSwipe from "./cpns/detail_01-swipe.vue"
import DetailInfos from "./cpns/detail_02-infos.vue"
import DetailFacility from "./cpns/detail_03-facility.vue"
import DetailLandlord from "./cpns/detail_04-landlord.vue"
import DetailComment from "./cpns/detail_05-comment.vue"
import DetailNotice from "./cpns/detail_06-notice.vue"
import DetailMap from "./cpns/detail_07-map.vue"
import DetailIntro from "./cpns/detail_08-intro.vue"
import TabControl from "@/components/tab-control/tab-control.vue"
import useScroll from '@/hooks/useScroll';

const route=useRoute()
const router=useRouter()
const houseId=route.params.id

//发送请求拿到数据
const detailInfos=ref({})
const mainPart=computed(()=>detailInfos.value.mainPart)
getDetailInfos(houseId).then((res)=>{
  detailInfos.value=res.data
})

//监听按钮返回
function onClickLeft(){
  router.back()
}


//tabControl相关
const detailRef=ref()
const { scrollTop }=useScroll(detailRef)
// function showTabControl(){
//   computed(()=>{
//     return scrollTop.value>=300
//   })
// }  错误的写法
const showTabControl = computed(() => {
  return scrollTop.value >= 300
})
</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>