<script setup>
const Data = [
    {
      date:"October 28, 2023",
      active:"First Announcement, Conference web on-line"
    },
    {
      date:"March 1, 2024",
      active:"Student Grant application deadline\nIAEA support application deadline"
    },
    {
      date:"May 1, 2024",
      active:"Abstract Submission deadline"
    },
    {
      date:"June 15, 2024",
      active:"Abstract Acceptance Notification"
    },
    {
      date:"September 15-19, 2024",
      active:"ICAMDATA conference"
    },
    {
      date:"December 15, 2024",
      active:"deadline for the submission to the Topical Issue of the European Physical Journal D Atomic and Molecular Data and Their Applications: ICAMDATA2022"
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
    <el-col :span="14" :offset="5">
      <p style="margin-bottom: 1%;font-weight: bold" class="namoral">Important Date</p>
      <el-table :data="Data" class="namoral" border :show-header="false">
        <el-table-column prop="date"/>
        <el-table-column prop="active" align="right" />
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