<template>
  <el-row style="background-color: white ;opacity:0.85;" >
    <el-divider class="divider"/>
    <el-col :span="24" style="margin-bottom: 3%">
      <div>
        <CardSwiper_lanzou/>
      </div>
      <div>
        <img src="../components/icons/footer2.jpg" style="width: 100%;height: 100%;margin-top: 2%"/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import ImageSlider from "@/components/ImageSlider.vue";
import CardSwiper_gansu from "@/components/CardSwiper_gansu.vue";
import CardSwiper from "@/components/CardSwiper.vue";
import CardSwiper_lanzou from "@/components/CardSwiper_lanzou.vue";

export default {
  name: "Footer",
  components: {CardSwiper_lanzou, CardSwiper, CardSwiper_gansu, ImageSlider}
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
