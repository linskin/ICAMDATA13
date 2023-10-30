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
  <el-row>
    <el-col :span="3">
      <div/>
    </el-col>
  </el-row>
  <p>International Program Committee</p>
  <el-table :data="InterData" style="width:100%">
    <el-table-column prop="date" width="180"  />
    <el-table-column prop="name" width="180" align="right"/>
  </el-table>
  <p>Local Organizing Committee</p>
  <el-table :data="LocalData" style="width: 100%">
    <el-table-column prop="date" width="180" />
    <el-table-column prop="name" width="180"  align="right" />
  </el-table>
</template>

<style scoped>

</style>