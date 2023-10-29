<script setup>
import Header from "@/components/Header.vue";
import HomePage from "@/components/HomePage.vue";
import ImageSlider from "@/components/ImageSlider.vue";
import HomePageNew from "@/components/HomePageNew.vue";
</script>

<template>
  <div class="horizontal-full">
        <Header class="header">
        </Header>
<!--        <HomePage class="el-main">-->
<!--        </HomePage>-->
        <home-page-new/>
<!--      <el-main style="margin-top: 490px"><ImageSlider/></el-main>-->
<!--      <el-footer>Footer</el-footer>-->

  </div>
</template>



<style>



.header{
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  z-index: 999;
  /* 其他样式属性 */
}

*{
  padding-left: 0;
  font-style: normal;
}
.horizontal-full {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  height: 100%; /* 设置高度为100%以占据整个可滚动区域 */
  overflow-y: auto; /* 允许垂直滚动 */
}
</style>