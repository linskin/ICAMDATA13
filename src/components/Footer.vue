<template>
  <el-row style="background-color: white">
    <el-divider class="divider"/>
    <el-col :span="24" style="margin-bottom: 3%">
      <div>
        <CardSwiper_lanzou/>
      </div>
      <div>
        <img class="img_holder" src="../components/icons/20019879902c80429e3c5be22dcc995.png" style="width: 100%;height: 100%;margin-top: 2%" alt=""/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CardSwiper_lanzou from "@/components/CardSwiper_lanzou.vue";

export default {
  name: "Footer",
  components: {CardSwiper_lanzou}
}
</script>

<style scoped>
.divider{
  height: 0.1pc;
  background-color: rgba(0, 0, 0, 0);
}
.el-row {
  margin-bottom: 0;
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
  width: 100%;
  height: 100%;
}

</style>
