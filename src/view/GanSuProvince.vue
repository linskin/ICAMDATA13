<template>
<!--  <ImageSlider class="Image_full"/>/////////////-->
  <el-row>
    <el-col :offset="2" :span="20">
      <h1>Gansu</h1>
    </el-col>
  </el-row>

  <el-row style="margin-bottom: 5%" class="namoral">
    <el-col :span="8" :offset="3">
      <el-card :body-style="{ padding: '0px' ,width: 'fit-content'}">
        <img src="../components/icons/dunhuang.jpg" alt="" style="width: 100%"/>
        <div style="padding: 14px">
          <span style="align-content: center">Dunhuang</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="10" :offset="1" style="justify-content: right;margin-top: 2%">
      <div>
        Gansu is a province located in northwest China, known for its rich cultural and historical heritage. One of its most famous attractions is the Mogao Caves in Dunhuang, also known as the "Caves of the Thousand Buddhas". These caves contain some of the finest examples of Buddhist art and architecture in the world, dating back to the 4th century AD.
      </div>
    </el-col>
  </el-row>

<el-row style="margin-bottom: 5%" class="namoral">
    <el-col :span="8" :offset="3">
      <el-card :body-style="{ padding: '0px' ,width: '100%' }">
        <img src="../components/icons/maijishan.jpg" alt="" style="width: 100%"/>
        <div style="padding: 14px">
          <span style="align-content: center">Wheat accumulation mountain</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="10" :offset="1" style="justify-content: right;margin-top: 2%">
      <div>
        Another notable site in Gansu is the Maijishan Mountain, which features a series of cliff-side grottoes containing Buddhist statues and murals. The area also offers stunning views of the surrounding landscape, making it a popular destination for nature lovers and hikers.
      </div>
    </el-col>
  </el-row>

  <el-row style="margin-bottom: 5%" class="namoral">
    <el-col :span="8" :offset="3">
      <el-card :body-style="{ padding: '0px' ,width: '100%' }">
        <img src="../components/icons/gannancaoyuan.png" alt="" style="width: 100%"/>
        <div style="padding: 14px">
          <span style="align-content: center">Grasslands in southern Gansu</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="10" :offset="1" style="justify-content: right;margin-top: 2%">
      <div>
        Additionally, the vast grasslands of Gannan offer a unique opportunity to experience the beauty of China's natural environment and traditional nomadic culture.
      </div>
    </el-col>
  </el-row>

  <el-row class="namoral">
    <el-col :offset="3" :span="20">
      <div>
        Overall, Gansu is a fascinating destination for anyone interested in Chinese culture and history, and would make a great addition to any international academic conference itinerary.
      </div>
    </el-col>
  </el-row>
</template>

<script>
import ImageSlider from "@/components/ImageSlider.vue";

export default {
  name: "GanSu",
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
  font-size:19pt;
  font-family:"微软雅黑 Light",sans-serif;
}
@media (max-width: 1500px) {
  .namoral{
    font-size: 15px;
  }
}
</style>