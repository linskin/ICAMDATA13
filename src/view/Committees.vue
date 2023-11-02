<script setup>
const InterData = [
    {
      date: 'James Babb, US',
      name: 'Jelle Kaastra, Netherlands',

    },
    {
      date: 'Beatriz Barbuy, Brazil',
      name: 'Annarita Laricchiuta, Italy (Past Chair)',

    },
    {
      date: 'Jacek Bieroń, Poland',
      name: 'Daiji Kato, Japan',
    },
    {
      date: 'Dmitry Fursa, Australia',
      name: 'Nobuyuki Nakamura, Japan',
    },
    {
      date: 'Nancy Brickhouse, US ',
      name: 'Yong Wu, China',
    },
    {
      date: 'Stuart Loch, US',
      name: 'Gerry O\'Sullivan, Ireland',
    },
    {
      date: 'Chenzhong Dong, China(Chair)',
      name: 'Juliet Pickering, UK',
    },
    {
      date: 'Zong-Chao Yan, Canada',
      name: 'Alexander Kramida, US',
    },
    {
      date: 'Andrey Surzhykov, Germany',
      name: 'Iouli Gordon, US',
    },
    {
      date: 'Mi-Young Song, Korea',
      name: 'Christian Hill, IAEA',
    },
    {
      date: 'Inga Tolstikhina, Russia',
      name: 'Valdas Jonauskas, Lithuania',
    },
    {
      date: 'Duck-Hee Kwon, Korea',
      name: '',
    },
    ]
const LocalData =[
  {
    date: 'Chenzhong Dong,NWNU, China(Chair)',
    name: 'Xiaobin Ding,NWNU, China(Acting Secretary)',
  },
  {
    date: 'Denghong Zhang, NWNU, China',
    name: 'Maogen Su, NWNU, China',
  },
  {
    date: 'Luyou Xie, NWNU, China',
    name: 'Jun Jiang, NWNU, China',
  },
  {
    date: 'Duixiong Sun, NWNU, China',
    name: 'Qi Min, NWNU, China',
  },
  {
    date: 'Maijuan Li, NWNU, China',
    name: 'Guoding Zhang, NWNU, China',
  },
  {
    date: 'Yulong Ma, NWNU, China',
    name: 'Shiquan Cao, NWNU, China',
  },
  {
    date: 'Zhongwen Wu, NWNU, China',
    name: 'Lei Wu, NWNU, China',
  },
  {
    date: 'Xinwen Ma, IMP, China',
    name: 'Jianguo Wang, IAPCM, China',
  },
  {
    date: 'Jun Yan, IAPCM, China',
    name: 'Yong Wu, IAPCM, China',
  },
  {
    date: 'Jiguang Li, IAPCM, China',
    name: '',
  },
]

</script>

<template>
  <div class="floating-window-label">
        <span>
          <img src="../components/icons/label.png" alt="label" />
        </span>
  </div>
<!--  <div class="background-container">-->
    <el-row style="margin-bottom: 35%">
      <el-col :span="24">
        <div>
          <img src="src/components/icons/NWNU.webp" style="z-index: -1;width: 99%;position: fixed" alt="NWNU"/>
        </div>
      </el-col>
    </el-row>
      <el-row>
        <el-col :span="3" style="background-color: white ;opacity:0.85;"/>
        <el-col :span="18" style="background-color: white ;opacity:0.85;">
          <p class="Bold">International Program Committee</p>
          <el-table :data="InterData" class="Mid">
            <el-table-column prop="date"   />
            <el-table-column prop="name" align="right"/>
          </el-table>
          <el-row>
            <el-col :span="24"><div class="null-content"/></el-col>
          </el-row>
          <p class="Bold">Local Organizing Committee</p>
          <el-table :data="LocalData" class="Mid">
            <el-table-column prop="date"/>
            <el-table-column prop="name" align="right" />
          </el-table>
        </el-col>
        <el-col :span="3" style="background-color: white ;opacity:0.85;"/>

      </el-row>
<!--  </div>-->

<!--  <el-row>-->
<!--    <el-col :span="24">-->
<!--      <div >-->
<!--        <img src="src/components/icons/NWNU.webp" style="width: 100%;z-index: -1" alt=""/>-->
<!--      </div>-->
<!--    </el-col>-->
<!--  </el-row>-->


</template>

<style scoped>
.null-content{
  min-height: 90px;
  background-color: #ffffff;
}
.Bold{
  margin:0;
//text-align:justify;
//text-justify:inter-ideograph;
  font-size:16pt;
  font-weight: bold;
  font-family:"微软雅黑",serif;
  color: #7c1818;
  //opacity:0.85;
  //font-family:"Helvetica Neue",
  //sans-serif;
}
.Mid{
  margin:0;
//text-align:justify;
//text-justify:inter-ideograph;
  font-size:14pt;
  color: #9f1e1e;

  font-family:"微软雅黑 Light",serif;
  //opacity:0.85;
  //font-weight: bold;
  //font-family:"Helvetica Neue",
  //sans-serif;
}
.floating-window-label{
  position:absolute;
  top:300px;
  right:50px;
  z-index: 2;
  opacity:0.7;
}
</style>

