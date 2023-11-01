<template>
  <img src="" width="100%">
  <el-carousel :interval="4000" type="card" height="300px" indicator-position="outside">
    <el-carousel-item v-for="item in imgList" :key="item" >
      <h3 text="2xl" justify="center">{{ item.id }}</h3>
      <img :src="item.url"  height="360px" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
const imgList = [
  {
    id: '1',
    url: 'https://puui.qpic.cn/vcover_hz_pic/0/o8mbrpo92gni5uc1614137102933/0'
  },
  {
    id: '2',
    url: "https://puui.qpic.cn/vcover_hz_pic/0/mzc002004jql6911612779226790/0",
  },
  {
    id: '3',
    url: "https://puui.qpic.cn/vcover_hz_pic/0/mzc002004660qpk1610075881185/0",
  },
  {
    id: '4',
    url: "https://puui.qpic.cn/vcover_hz_pic/0/mzc00200x9fxrc91603793682527/0",
  },
  {
    id: '5',
    url: "https://puui.qpic.cn/vcover_hz_pic/0/mzc00200kf4feup1613962380506/0",
  },
  {
    id: '6',
    url:  "https://puui.qpic.cn/vcover_hz_pic/0/mzc00200oxq32bf1614750187209/0",
  }]
</script>


<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
const imgList = [
        {
          id: '1',
          url: 'https://puui.qpic.cn/vcover_hz_pic/0/o8mbrpo92gni5uc1614137102933/0'
        },
        {
          id: '2',
          url: "https://puui.qpic.cn/vcover_hz_pic/0/mzc002004jql6911612779226790/0",
        },
        {
          id: '3',
          url: "https://puui.qpic.cn/vcover_hz_pic/0/mzc002004660qpk1610075881185/0",
        },
        {
          id: '4',
          url: "https://puui.qpic.cn/vcover_hz_pic/0/mzc00200x9fxrc91603793682527/0",
        },
        {
          id: '5',
          url: "https://puui.qpic.cn/vcover_hz_pic/0/mzc00200kf4feup1613962380506/0",
        },
        {
          id: '6',
          url:  "https://puui.qpic.cn/vcover_hz_pic/0/mzc00200oxq32bf1614750187209/0",
        }]
</script>