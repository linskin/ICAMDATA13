<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <div class="horizontal-full">
    <el-header><Header class="header"></Header></el-header>
    <el-main ><router-view/></el-main>
    <el-footer><Footer/></el-footer>
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
.el-main{
  margin: 0;
  padding: 0;
  //height: fit-content;
}
.el-footer{
  margin: 0;
  padding: 0;
  //height: fit-content;
}

*{
  padding-left: 0;
  font-style: normal;
}
.horizontal-full {
  position: fixed;
  //top: 60px;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  height: 100%; /* 设置高度为100%以占据整个可滚动区域 */
  overflow-y: auto; /* 允许垂直滚动 */
}
</style>