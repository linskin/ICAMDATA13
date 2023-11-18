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
  <el-row style="background-color: white ;opacity:0.85;margin-top: 3%">

  <el-row style="margin-bottom: 3%; margin-top: 3%;">
    <el-col :span="22" :offset="1" style="background-color: white ;opacity:0.85;">
      <h2 class="label">How to Reach Lanzhou</h2>
      <br/>
      <p class="namoral">The closest airport is the Lanzhou Zhongchuan International Airport (IATA Code：LHW), located at approximately 56 km Northwest from the Northwest Normal University. The airport is connected by domestic flights to the international airports of Beijing, Shanghai, Xian, Guangzhou and some other cities.</p>
    </el-col>
  </el-row>

  <el-row >
    <el-col :span="22" :offset="1">
      <h2 class="label">From the Airport to Northwest Normal University</h2>
      <br/>
      <p class="namoral">The local organizing committee will offer FREE shuttle bus to pick you up at the airport from 10 a.m. until 9 p.m. in Sep. 15. The detailed time schedule of the shuttle bus will be updated later. It will depend on the participants’ arriving time.
      </p>
    </el-col>
  </el-row>

<el-row>
  <el-col :span="20" :offset="2">
    <el-divider/>
  </el-col>
</el-row>
  </el-row>

  <el-row style="background-color: white ;opacity:0.85;">
    <el-col :span="14" :offset="5" style="margin-top: 5%">
      <p style="text-align: center;font-size: 16pt;">Shuttle Bus Time Table</p>
      <el-table stripe :data="Data" class="label" border :show-header="false" :size="'large'">
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
  font-size:15pt;
  font-family:"微软雅黑 Light",sans-serif;
}
.label
{
  margin:0;
  font-size:18pt;
  font-weight: bold;
  font-family:"微软雅黑 Light",sans-serif;
}
.floating-window-label{
  position:absolute;
  margin-top:10%;
  right:3%;
  width: 45%;
  z-index: 2;
  opacity:0.7;
}
@media (max-width : 1500px) {
  h1, .h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
  h2, .h2 {
    font-size: calc(1.325rem + 0.9vw);
  }
  h3, .h3 {
    font-size: calc(1.3rem + 0.6vw);
  }
  h4, .h4 {
    font-size: calc(1.275rem + 0.3vw);
  }
  p, .p, span, .span{
    font-size: calc(1rem + 0.9vw);
  }

}
</style>