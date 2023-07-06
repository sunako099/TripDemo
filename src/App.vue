<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
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
