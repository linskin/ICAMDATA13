<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="top-widget" >
        <Header>

        </Header>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>



<style>
.top-widget {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  color: #333;
  /* 其他样式属性 */
}
</style>