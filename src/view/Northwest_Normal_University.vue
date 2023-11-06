<template>
  <div style="padding-left: 10vw;padding-right: 10vw">

  <el-row>
    <el-col :offset="1" :span="20">
      <h1>Northwest Normal University</h1>
    </el-col>
  </el-row>

  <el-row style="margin-bottom: 5%" class="namoral">
    <el-col :span="8" :offset="2">
      <el-card :body-style="{ padding: '0px' ,width: '100%' }">
        <img src="../components/icons/img.png" alt="" style="width: 100%">
        <div style="padding: 14px">
          <span style="align-content: center">North Gate of the School</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="11" :offset="1" style="justify-content: right">
      <div>Northwest Normal University (NWNU) is a key university jointly constructed by the People's Government of Gansu Province and the Ministry of Education. Its predecessor is the National Beiping Normal University, which was founded in 1902 as the Normal Hall of the Peking Normal University, changed to the "National Beijing Higher Normal School" in 1912, and changed to the "National Beiping Normal University" in 1923. It moved to Lanzhou in 1941. In 2020, the school was listed as a provincial university supported by the People's Government of Gansu Province to enter the construction of the first-class universities in the country.</div>
    </el-col>
  </el-row>

  <el-row style="" class="namoral">
    <el-col :span="8" :offset="2">
      <el-card :body-style="{ padding: '0px' ,width: '100%' }">
        <img src="../components/icons/tsg.jpg" alt="">
        <div style="padding: 14px">
          <span style="align-content: center">New Campus Library</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="11" :offset="1" style="justify-content: right">
      <div>Since its independent establishment, more than 290,000 students had been trained and grown up. The university enrolls students from 31 provinces (autonomous regions and municipalities directly under the central government) in China, and there are currently 29,586 students enrolled in various types of schools, including 18,105 ordinary undergraduates, 865 doctoral students, 10,170 master's degree students, and 446 international students. There are 2,627 faculty members in the university, with 375 full senior titles, 887 associate titles, 990 with doctoral degrees and 935 with master's degrees. Among them, 1,739 are full-time teachers, 351 are professors and 703 are associate professors.</div>
    </el-col>
  </el-row>
    <el-row style="margin-top: 2%">
      <el-col :span="21" :offset="2">
        <CardSwiper_nwnu/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ImageSlider from "@/components/ImageSlider.vue";

export default {
  name: "GanSu",
  components: {CardSwiper_nwnu, ImageSlider}
}
import { ref } from 'vue'
import CardSwiper_nwnu from "@/components/CardSwiper_nwnu.vue";

const currentDate = ref(new Date())
</script>

<style scoped>
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
  margin-inline:5px;
  font-size:18pt;
  font-family:"微软雅黑 Light",sans-serif;
}
@media (max-width: 1500px) {
  .namoral{
    font-size: 15px;
  }
}
</style>