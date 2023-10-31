<template>
  <!--  <ImageSlider class="Image_full"/>/////////////-->
  <el-row>
    <el-col :offset="1" :span="20">
      <h1>Northwest Normal University</h1>
    </el-col>
  </el-row>

  <el-row style="margin-bottom: 10%" class="namoral">
    <el-col :span="8" :offset="2">
      <el-card :body-style="{ padding: '0px' ,width: '100%' }">
        <ImageSlider class="Image_full"/>
        <div style="padding: 14px">
          <span style="align-content: center">Map of Gansu Province</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="10" :offset="1" style="justify-content: right">
      <div>Northwest Normal University (NWNU) is a key university jointly constructed by the People's Government of Gansu Province and the Ministry of Education. Its predecessor is the National Beiping Normal University, which was founded in 1902 as the Normal Hall of the Peking Normal University, changed to the "National Beijing Higher Normal School" in 1912, and changed to the "National Beiping Normal University" in 1923. It moved to Lanzhou in 1941. In 2020, the school was listed as a provincial university supported by the People's Government of Gansu Province to enter the construction of the first-class universities in the country.</div>
    </el-col>
  </el-row>

  <el-row style="margin-bottom: 10%" class="namoral">
    <el-col :span="8" :offset="2">
      <el-card :body-style="{ padding: '0px' ,width: '100%' }">
        <ImageSlider class="Image_full"/>
        <div style="padding: 14px">
          <span style="align-content: center">Map of Gansu Province</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="10" :offset="1" style="justify-content: right">
      <div>Since its independent establishment, more than 290,000 students had been trained and grown up. The university enrolls students from 31 provinces (autonomous regions and municipalities directly under the central government) in China, and there are currently 29,586 students enrolled in various types of schools, including 18,105 ordinary undergraduates, 865 doctoral students, 10,170 master's degree students, and 446 international students. There are 2,627 faculty members in the university, with 375 full senior titles, 887 associate titles, 990 with doctoral degrees and 935 with master's degrees. Among them, 1,739 are full-time teachers, 351 are professors and 703 are associate professors.</div>
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
  font-size:13pt;
  font-family:"微软雅黑 Light",sans-serif;
}
</style>