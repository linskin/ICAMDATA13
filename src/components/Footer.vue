<template>

  <el-row style="background-color: white ;opacity:0.85;" >
    <el-divider class="divider"/>
    <el-col :span="18" :offset="3">
      <div>
        <img src="./icons/zanzhushang.png" alt="赞助商" class="img_holder">
      </div>
    </el-col>
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
.divider{
  height: 0.1pc;
  background-color: rgba(0, 0, 0, 0);
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
  //margin: 1%;
  width: 100%;
}

</style>
