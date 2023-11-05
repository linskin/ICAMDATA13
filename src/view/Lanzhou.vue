<template>
  <el-row>
    <el-col :offset="2" :span="20">
      <h1>LanZhou</h1>
    </el-col>
  </el-row>

  <el-row style="margin-bottom: 5%" class="namoral">
    <el-col :span="7" :offset="3">
      <el-card :body-style="{ padding: '0px' ,width: '100%' }">
        <img src="../components/icons/baitashan.jpg" style="width: 100%">
        <div style="padding: 14px">
          <span style="align-content: center">Baita Mountain</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="10" :offset="1" style="justify-content: right">
      <div>Lanzhou, the capital of Gansu Province, is located in the geometric center of China's land map, and is an important central city, industrial base and comprehensive transportation hub in Northwest China, as well as a core node city of the Silk Road Economic Belt. With a history of over 2,000 years, it has a rich cultural heritage that attracts many tourists every year. One of the most famous historical sites in Lanzhou is the White Pagoda Mountain, which features a towering white pagoda that was built during the Tang Dynasty (618 to 907 A.D). The Gansu Provincial Museum, which houses many ancient artifacts and exhibits that showcase the region's history and culture, is also famous.</div>
    </el-col>
  </el-row>

  <el-row style="margin-bottom: 3%" class="namoral">
    <el-col :span="8" :offset="3">
      <el-card :body-style="{ padding: '0px' ,width: '100%' }">
        <img src="../components/icons/shikuo.png" style="width: 100%">
        <div style="padding: 14px">
          <span style="align-content: center">Map of Gansu Province</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="10" :offset="1" style="justify-content: right">
      <div>In addition to its historical sites, Lanzhou is also known for its natural scenery. Lanzhou is the only provincial capital where the Yellow River passes through the city, provides a beautiful backdrop for visitors. The Bingling Temple Grottoes, located just outside of Lanzhou, are also a must-see for tourists.</div>
    </el-col>
  </el-row>

  <el-row class="namoral">
    <el-col :offset="3" :span="20">
      <div>Lanzhou is a city that offers a unique blend of history, culture, and natural beauty. We hope you enjoy the trip to Lanzhou and NWNU.</div>
    </el-col>
  </el-row>
</template>

<script>
import ImageSlider from "@/components/ImageSlider.vue";

export default {
  components: {ImageSlider}
}
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style scoped>
.Image_full{
  width: inherit;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

.namoral
{
  margin:5px;
  font-size:18pt;
  font-family:"微软雅黑 Light",sans-serif
}
@media (max-width: 1500px) {
  .namoral{
    font-size: 15px;
  }
}
</style>