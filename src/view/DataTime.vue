<script setup>
const Data = [
    {
      date:"November 26, 2023",
      active:"First announcement, conference Web on-line"
    },
    {
      date:"March 1, 2024",
      active:"Student grant application deadline, \nIAEA support application deadline"
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
      date:"September 15-19, 2024",
      active:"ICAMDATA conference"
    },
    {
      date:"December 15, 2024",
      active:"Deadline for the submission of full text"
    },
    {
      date:"",
      active:""
    },
    {
      date:"",
      active:""
    },
]
</script>

<template>
  <el-row style="margin-top: 5%">
    <el-col :span="20" :offset="2">
      <p style="margin-bottom: 1%;font-weight: bold" class="namoral">Important Date</p>
      <el-table :data="Data" class="namoral" border :show-header="false">
        <el-table-column prop="date"/>
        <el-table-column prop="active" />
      </el-table>
    </el-col>
  </el-row>
</template>

<style scoped>
.namoral
{
  margin:5px;
  font-size:15pt;
  font-family:"微软雅黑",sans-serif;
  color: black;
}
@media (max-width: 1500px) {
  .namoral{
    font-size: 15px;
  }
}
</style>