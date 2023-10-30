<template>
  <el-divider class="el-divider"/>
  <el-row>
    <el-col :span="16" :offset="5">
      <div class="Sponsors" >
        <span>这里插入赞助商logo</span>
        <p><span>&nbsp;</span></p>
        <img src="" alt="" class="img_holder">
        <img src="" alt="" class="img_holder">
        <img src="" alt="" class="img_holder">
        <img src="" alt="" class="img_holder">
        <img src="" alt="" class="img_holder">
        <img src="" alt="" class="img_holder">
        <img src="" alt="" class="img_holder">
        <img src="" alt="" class="img_holder">
      </div>
    </el-col>

    <el-col :span="2"><div style="background-color: #eeeeee"></div></el-col>
  </el-row>
</template>

<script>
import ImageSlider from "@/components/ImageSlider.vue";

export default {
  name: "Footer",
  components: {ImageSlider}
}
</script>

<style scoped>
.el-divider{
  height: 1.5px;
  background-color: rgba(0, 0, 0, 0.24);
}
.Sponsors{
  background-color: #ffffff;
  //padding: 10vw;
  //width: 1200px;
  min-height: 500px;
  //z-index: 2200;
}
.text{
  background-color: #ffffff;
  min-height: fit-content;
}
.el-row {
  margin-bottom: 0px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
p.Mid, li.Mid, div.Mid
{
  margin:0;
  text-align:justify;
  text-justify:inter-ideograph;
  font-size:14pt;
  font-family:"Helvetica Neue",sans-serif;
}
.img_holder{
  margin: 10px;
  //background-color: #181818;
  width: 200px;
  height: 200px;
}
</style>
