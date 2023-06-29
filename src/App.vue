<template>
  <div class="app">
    <router-view></router-view>
    <tabbar v-if="!route.meta.hideTabBar"/>
    <loading/>
  </div>
</template>

<script setup>
import tabbar from "./components/tabbar/tabbar.vue";
import { useRoute } from "vue-router";
import  loading  from "@/components/loading/loading.vue";
const route=useRoute()
</script>

<style lang="less" scoped>

</style>
