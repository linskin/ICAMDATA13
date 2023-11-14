<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <div class="horizontal-full">
    <el-header><Header class="header"></Header></el-header>
    <el-main class="dibr"><router-view></router-view></el-main>
    <el-footer><Footer/></el-footer>
  </div>
</template>



<style>

.header{
  @media screen and (min-width: 300px){
    position: fixed;
  //padding-right: 10rem;
  //padding-left: 10rem;
    z-index: 999;
    /* 其他样式属性 */
  }
  @media screen and (max-width: 3000px) {
    position: fixed;
  //padding-right: 10rem;
  //padding-left: 10rem;
    z-index: 1;
    /* 其他样式属性 */
  }
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
.dibr{
  overflow-y: hidden;
}
@media (max-width: 600px){
  overflow-y: auto;
}
</style>