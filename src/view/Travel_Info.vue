<script setup>
 const Data=[
     {
       d1: '',
       d2: '',
       d3: '',
       d4: '',
       d5: '',
       d6: '',
       d7: '',
     },
     {
       d1: '',
       d2: '',
       d3: '',
       d4: '',
       d5: '',
       d6: '',
       d7: '',
     }
 ]
</script>

<template>
  <el-row style="margin-bottom: 3%; margin-top: 3%">
    <el-col :span="18" :offset="3">
      <h2 class="label">How to Reach Lanzhou</h2>
      <b/>
      <p class="namoral">The closest airport is the Lanzhou Zhongchuan International Airport (IATA Code：LHW), located at approximately 56 km Northwest from the Northwest Normal University. The airport is connected by domestic flights to the international airports of Beijing, Shanghai, Xian, Guangzhou and some other cities.</p>
    </el-col>
  </el-row>

  <el-row >
    <el-col :span="18" :offset="3">
      <h2 class="label">From the Airport to Northwest Normal University</h2>
      <b/>
      <p class="namoral">The local organizing committee will offer FREE shuttle bus to pick you up at the airport from 10 a.m. until 9 p.m. in Sep. 15. The detailed time schedule of the shuttle bus will be updated later. It will depend on the participants’ arriving time.
      </p>
    </el-col>
  </el-row>

<el-row>
  <el-col :span="20" :offset="2">
    <el-divider/>
  </el-col>
</el-row>

  <el-row>
    <el-col :span="20" :offset="2">
      <p align="center">Shuttle Bus Time Table</p>
      <el-table :data="Data" class="label" border :show-header="false" :size="'large'">
        <el-table-column prop="d1"/>
        <el-table-column prop="d2"/>
        <el-table-column prop="d3"/>
        <el-table-column prop="d4"/>
        <el-table-column prop="d5"/>
        <el-table-column prop="d6"/>
        <el-table-column prop="d7"/>
      </el-table>
    </el-col>

  </el-row>

</template>

<style scoped>
.namoral
{
  margin:5px;
  font-size:13pt;
  font-family:"微软雅黑 Light",sans-serif;
}
.label
{
  margin:0;
  font-size:18pt;
  font-weight: bold;
  font-family:"微软雅黑",sans-serif;
}
</style>