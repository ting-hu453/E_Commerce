<template>
  <HeaderComponenet />
  <router-view></router-view>
  <FooterComponent v-show="$route.meta.show" />
</template>

<script setup>
import HeaderComponenet from "./components/Header/HeaderComponent.vue";
import FooterComponent from "./components/Footer/FooterComponent.vue";
import { useHomeStore } from "@/store/HomeStore";

//We are only getting the list one time so we have it here, otherwise it will fetch whenever TypeNav is called.
const homeStore = useHomeStore();
homeStore.getCategoryList();
</script>

<style></style>
