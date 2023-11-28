<script setup>
const Data = [
    {
      date:"November 26, 2023",
      active:"First announcement, conference Web on-line"
    },
    {
      date:"March 1, 2024",
      active:"Registration open, Abstract submission open, Student grant application deadline, IAEA support application deadline"
    },
    {
      date:"May 1, 2024",
      active:"Abstract submission deadline"
    },
    {
      date:"June 15, 2024",
      active:"Abstract acceptance notification"
    },
    {
      date:"September 22-26, 2024",
      active:"ICAMDATA conference"
    },
    {
      date:"December 15, 2024",
      active:"Deadline for the submission of full text"
    },
]
</script>

<template>
  <el-row style="margin-top: 5%">
    <el-col :span="22" :offset="1">
      <p style="margin-bottom: 1%;font-weight: bold" class="namoral">Important Date</p>
      <el-table :data="Data" class="naal" border :show-header="false">
        <el-table-column prop="date"/>
        <el-table-column prop="active"/>
      </el-table>
    </el-col>
  </el-row>
</template>

<style scoped>
.namoral
{
  line-height: 1;
  font-size:15pt;
  font-weight: bold;
  font-family:"微软雅黑",sans-serif;
  color: black;
}
.naal{
  line-height: 1;
  font-size:14pt;
  font-family:"宋体",sans-serif;
  color: black;
}
/*@media (max-width: 1500px) {
  .namoral{
    font-size: 15px;
  }
}*/
</style>