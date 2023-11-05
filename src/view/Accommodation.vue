<template>
  <el-row>
    <el-col :span="8" :offset="3">
      <div>
        <h1>Accommodation</h1>
        <p class=Mid  style='text-align:left'><span lang=EN-US>&nbsp;</span></p>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :offset="3" :span="8" style="background-color: #ffffff">
      <el-card :body-style="{ padding: '0px' ,width: '100%' }">
        <ImageSlider_accommodation class="Image_full"/>
        <div style="padding: 3%">
          <span style="align-content: center">International Academic Exchange Center</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="9" style="margin-top: 5%" :offset="1">
      <el-row>
        <el-col>
          <div>
            <span class="normal">
        The ICAMDATA conference will be held in the International Academic Exchange Center of Northwest Normal University.
        </span>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 2%">
        <el-col>
          <div>
        <span class="normal">
          Detailed information about the accommodation will be updated soon
        </span>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>


<style scoped>
.el-carousel__item h3 {
  color: #ffffff;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
.normal {
  margin:0;
  font-size:15pt;
  font-family:"微软雅黑",sans-serif;

}
.Image_full{
  width: inherit;
  height: fit-content;
}
</style>
<script setup>
import ImageSlider_accommodation from "@/components/ImageSlider_accommodation.vue";
</script>