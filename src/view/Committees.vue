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
  <div style="padding-right: 10vw;padding-left: 10vw">
    <el-row style="margin-bottom: 36%">
      <el-col :span="24.0" >
        <div >
        <span>
          <img src="../components/icons/label.png" alt="label" class="floating-window-label"/>
        </span>
        </div>
        <div>
          <img src="../components/icons/NWNU.webp" style="z-index: -1;width: 79vw;position: fixed" alt="NWNU"/>
        </div>
      </el-col>
    </el-row>
      <el-row style="background-color: white ;opacity:0.95;">
<!--        <el-col :span="4" style="background-color: white ;opacity:0.95;margin-top: 1%"/>-->
        <el-col :span="14" style="background-color: white ;opacity:0.95;margin-top: 1%" :offset="5">
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
        <el-col :span="3" style="background-color: white ;opacity:0.95;margin-top: 1%"/>

      </el-row>

</div>
</template>

<style scoped>
.null-content{
  min-height: 90px;
  background-color: #ffffff;
}
.Bold{
  margin:0;
  font-size:18pt;
  font-weight: bold;
  font-family:"微软雅黑",serif;
  color: black;
}
.Mid{
  margin:0;
  font-size:14pt;
  color: black;
  font-family:"微软雅黑",serif;
}
.floating-window-label{
  position:absolute;
  top:30%;
  right:3%;
  width: 45%;
  z-index: 2;
  opacity:0.7;
}
@media (max-width : 1500px) {
  .Bold{
    font-size:16pt;
  }
  .Mid{
    font-size:14pt;
  }
}
</style>

