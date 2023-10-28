<script setup>
import Header from "@/components/Header.vue";
import HomePage from "@/components/HomePage.vue";
</script>

<template>
  <div class="common-layout">
    <el-container  style="width: 100%">
      <el-header class="top-widget" >
        <Header>

        </Header>
      </el-header>
      <el-main><HomePage/></el-main>
    </el-container>
  </div>
</template>



<style>
.top-widget {
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  z-index: 999;
  background-color: #fff;
  color: #333;
  /* 其他样式属性 */
}
.body{
  padding: 0;
}
.el-header{
  padding: 0;
  margin: 0;
}
*{
  padding-left: 10px;
}
</style>