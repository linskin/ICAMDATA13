<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <div class="horizontal-full">
    <el-header class="header"><Header></Header></el-header>
    <el-main class="dibr"><router-view></router-view></el-main>
    <el-footer style="padding-right: 10vw;padding-left: 10vw"><Footer/></el-footer>
  </div>
</template>



<style>

.header{
  @media screen and (min-width: 300px){
  //padding-right: 10rem;
  //padding-left: 10rem;
    z-index: 999;
    padding-left: 10vw;padding-right: 10vw
    /* 其他样式属性 */
  }
  @media screen and (max-width: 3000px) {
  //padding-right: 10rem;
  //padding-left: 10rem;
    z-index: 1;
    padding-left: 10vw;padding-right: 10vw
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
  margin-top: 23%;
  padding-right: 10vw;padding-left: 10vw
}
@media (max-width: 600px){
  overflow-y: auto;
}
</style>