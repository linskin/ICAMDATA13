<script setup>

</script>

<template>
  <el-row style="margin-top: 4%;font-size: 16pt">
    <el-col :span="5" :offset="2"><p>Database Meeting</p></el-col>
  </el-row>
  <el-row >
    <el-col :span="6" :offset="4" style="margin-top: 5% ">
      <el-card :body-style="{ padding: '0px' ,width: '100%'}">
        <img src="../components/icons/iaea_amd_logo.gif" alt="" style="width: 100%"/>
        <div style="padding: 1%">
          <span style="align-content: center"><p>IAEA - Atomic and Molecular Data Unit</p>
      <p> <span><a href="https://amdis.iaea.org/">https://amdis.iaea.org/</a></span></p></span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="7" :offset="3" style="margin-top: 2%">
      <el-card :body-style="{ padding: '0px' ,width: '100%'}">
        <img src="../components/icons/nist-logo.jpg"  alt="" style="width: 100%"/>
        <div style="padding: 1%">
          <span style="align-content: center"><p>NIST - National Institute of Standards and Technology</p></span>
          <p> <span><a href="https://www.nist.gov/">https://www.nist.gov/</a></span></p>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row style="margin-top: 4%;font-size: 16pt">
    <el-col :span="5" :offset="2"><p>Grasp Meeting</p></el-col>
  </el-row>
  <el-row style="margin-top: 5%;font-size: 13pt;margin-bottom: 4%">
    <el-col :span="5" :offset="9"><p style="font-size: 18pt">Will be updated soon.</p></el-col>
  </el-row>
</template>

<style scoped>
@media (max-width: 1500px) {
  .normal{
    font-size: 15px;
  }
}
</style>