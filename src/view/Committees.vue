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
      date: 'Chenzhong Dong, China (Chair)',

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
    date: 'Chenzhong Dong,NWNU ',
    name: 'Denghong Zhang, NWNU (Chair)',
  },
  {
    date: 'Xiaobin Ding,NWNU (Acting Secretary)',
    name: 'Maogen Su, NWNU (Acting Secretary)',
  },
  {
    date: 'Luyou Xie, NWNU',
    name: 'Jun Jiang, NWNU',
  },
  {
    date: 'Duixiong Sun, NWNU',
    name: 'Qi Min, NWNU',
  },
  {
    date: 'Maijuan Li, NWNU',
    name: 'Guoding Zhang, NWNU',
  },
  {
    date: 'Yulong Ma, NWNU',
    name: 'Shiquan Cao, NWNU',
  },
  {
    date: 'Zhongwen Wu, NWNU',
    name: 'Songfeng Zhao,NWNU',
  },
  {
    date: 'Lei Wu, NWNU',
    name: 'Xinwen Ma, IMP'
  },
  {
    date: 'Jianguo Wang, IAPCM',
    name: 'Jun Yan, IAPCM',
  },
  {
    date: 'Yong Wu, IAPCM',
    name: 'Jiguang Li, IAPCM',
  },
]

</script>

<template>
      <el-row style="background-color: white ;opacity:0.95;margin-top: 5%">
        <el-col :span="22" style="background-color: white ;opacity:0.95" :offset="1" >
          <p class="Bold">International Program Committee</p>

          <el-table :data="InterData" class="Mid" >
            <el-table-column prop="date" />
            <el-table-column prop="name" align="left"/>
          </el-table>
          <el-row>
            <el-col :span="24"><div class="null-content"/></el-col>
          </el-row>
          <p class="Bold">Local Organizing Committee</p>
          <el-table :data="LocalData" class="Mid">
            <el-table-column prop="date" />
            <el-table-column prop="name" align="left"/>
          </el-table>
        </el-col>
        <el-col :span="3" style="background-color: white ;opacity:0.95;margin-top: 1%"/>
      </el-row>
</template>

<style scoped>
.null-content{
  min-height: 90px;
  background-color: #ffffff;
}
.Bold{
  margin:0;
  font-size:18pt;
  line-height: 1;
  font-weight: bold;
  font-family:"微软雅黑",serif;
  color: black;
}
.Mid{
  margin-top:3vh;
  font-size:14pt;
  line-height: 1;
  color: black;
  font-family:"宋体",serif;
}

/*@media (max-width : 1500px) {
  .Bold{
    font-size:16pt;
  }
  .Mid{
    font-size:14pt;
  }
}*/
</style>

