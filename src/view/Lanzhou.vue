<template>
  <h1>Gansu</h1>
  <br>
  <!--  <ImageSlider class="Image_full"/>/////////////-->

  <el-row >
    <el-col :span="8"><div class="grid-content ep-bg-purple" />
      <el-card :body-style="{ padding: '0px' ,width: '800px' }">
        <ImageSlider class="Image_full"/>
        <div style="padding: 14px">
          <span style="align-content: center">Map of Gansu Province</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16" offset="8" style="justify-content: right">
      <div class="grid-content" style="background-color: #2c3e50" />
      <div>
        甘肃省的描述
      </div>

    </el-col>
  </el-row>

  <el-row >
    <el-col :span="8"><div class="grid-content ep-bg-purple" />
      <el-card :body-style="{ padding: '0px' ,width: '800px' }">
        <ImageSlider class="Image_full"/>
        <div style="padding: 14px">
          <span style="align-content: center">Map of Gansu Province</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16" offset="8" style="justify-content: right">
      <div class="grid-content" style="background-color: #2c3e50" />
      <div>
        敦煌的描述
      </div>

    </el-col>
  </el-row>


  <el-row >
    <el-col :span="8"><div class="grid-content ep-bg-purple" />
      <el-card :body-style="{ padding: '0px' ,width: '800px' }">
        <ImageSlider class="Image_full"/>
        <div style="padding: 14px">
          <span style="align-content: center">Map of Gansu Province</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16" offset="8" style="justify-content: right">
      <div class="grid-content" style="background-color: #2c3e50" />
      <div>
        麦积山的描述
      </div>

    </el-col>
  </el-row>


  <el-row >
    <el-col :span="8"><div class="grid-content ep-bg-purple" />
      <el-card :body-style="{ padding: '0px' ,width: '800px' }">
        <ImageSlider class="Image_full"/>
        <div style="padding: 14px">
          <span style="align-content: center">Map of Gansu Province</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16" offset="8" style="justify-content: right">
      <div class="grid-content" style="background-color: #2c3e50" />
      <div>
        甘南草原的描述
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
  height: 600px;
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
</style>