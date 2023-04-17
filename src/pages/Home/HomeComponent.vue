<template>
  <div>
    <!-- We do not need to import TypeNav's vue because it is already imported into the main.js as the globale componenent where
    you can pull from anywhere in the application. -->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brand />
  </div>
</template>

<script setup>
import ListContainer from "@/pages/Home/ListContainer/ListContainerComponent.vue";
import Recommend from "@/pages/Home/Recommend/RecommendComponent.vue";
import Rank from "@/pages/Home/Rank/RankComponent.vue";
import Like from "@/pages/Home/Like/LikeComponent.vue";
import Floor from "@/pages/Home/Floor/FloorComponent.vue";
import Brand from "@/pages/Home/Brand/BrandComponent.vue";
// const { count } = storeToRefs(someStore);
</script>

<!--  http://gmall-h5-api.atguigu.cn -->
