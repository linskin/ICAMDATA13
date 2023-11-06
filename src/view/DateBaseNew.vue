<script setup>

import DataBase from "@/view/DataBase.vue";
</script>

<template>
  <el-row>
    <el-col :span="6" :offset="4" style="margin-top: 2%">
      <el-card :body-style="{ padding: '0px' ,width: '100%'}">
        <img src="../components/icons/iaea_amd_logo.gif" alt="" style="width: inherit"/>
        <div style="padding: 14px">
          <span style="align-content: center"><p>IAEA - Atomic and Molecular Data Unit</p>
      <p> <span><a href="https://amdis.iaea.org/">https://amdis.iaea.org/</a></span></p></span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6" :offset="3" style="margin-top: 2%">
      <el-card :body-style="{ padding: '0px' ,width: '100%'}">
        <img src="../components/icons/nist-logo.jpg"/>
<!--       <img src="../components/icons/iaea_amd_logo.gif" alt="" style="width: inherit"/>-->
        <div style="padding: 14px">
          <span style="align-content: center"><p>NIST - National Institute of Standards and Technology</p></span>
      <p> <span><a href="https://www.nist.gov/">https://www.nist.gov/</a></span></p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>

</style>