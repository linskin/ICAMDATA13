<template>
  <el-divider class="el-divider"/>
  <el-row>
    <el-col :span="3"/>
    <el-col :span="18">
      <div class="text Mid">
        <p class=Mid  style='text-align:left'><span lang=EN-US>The scientific programme will include invited and contributed talks in the regular sessions, a poster session and special sessions devoted to uncertainty quantification and database demonstrations.</span></p>

        <p class=Mid  style='text-align:left'><span lang=EN-US>&nbsp;</span></p>

        <p class=Mid  style='text-align:left'><span lang=EN-US>13th ICAMDATA, hosted by the <a href="https://www.nwnu.edu.cn/" target="_blank">NWNU</a>, constituted in Comitato Organizzatore di ICAMDATA 2020&star;, in the beautiful scenario of the
          <a href="http://wlj.lanzhou.gov.cn/" target="_blank">Lan Zhou</a>, is organized in cooperation with the
          <a href="https://www.iaea.org/" target="_blank">International Atomic Energy Agency (IAEA)</a>, with the patronage of the
          <a href="" target="_blank">xxx</a>, of the
          <a href=" " target="_blank">xxx</a> and of the
          <a href=" " target="_blank">xxx</a>, and the event is sponsored by
          <a href=" ">xxx</a> and the
          <a href="" target="_blank">xxx </a>.</span></p>

        <p class=Mid  style='text-align:left'><span lang=EN-US>&nbsp;</span></p>

        <p class=Mid  style='text-align:left'><span lang=EN-US>&star; Comitato Organizzatore di ICAMDATA 2023 (Via E Orabona 4 – Bari 70126 CF: 93503700721) is a non-profit organization whose only scope is to organize the 13th ICAMDATA</span></p>
      </div>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="2"><div style="background-color: #eeeeee"></div></el-col>

    <el-col :span="20">
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
  height: 1px;
  background-color: rgba(0, 0, 0, 0.23);
}
.Sponsors{
  background-color: #ffffff;
  padding: 10vw;
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
  font-size:16pt;
  font-family:"Helvetica Neue",sans-serif;}
.img_holder{
  margin: 10px;
  //background-color: #181818;
  width: 200px;
  height: 200px;
}
</style>
