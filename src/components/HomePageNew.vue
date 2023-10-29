<template>
  <div style="background-color: #000000;width: inherit;height: 12000px" >
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"><ImageSlider class="Image_full"/></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple">

        </div>
      </el-col>
    </el-row>
<!--    <el-row>-->
<!--      <el-col :span="12"><div class="grid-content bg-purple">sahfdafhjkahfjksdhf</div></el-col>-->
<!--      <el-col :span="12"><div class="grid-content bg-purple-light">sahfdafhjkahfjksdhf</div></el-col>-->
<!--    </el-row>-->
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple">sahfdafhjkahfjksdhf</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light">sahfdafhjkahfjksdhf</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">sahfdafhjkahfjksdhf</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple">sahfdafhjkahfjksdhf</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">sahfdafhjkahfjksdhf</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">sahfdafhjkahfjksdhf</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">sahfdafhjkahfjksdhf</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="3"><div class="grid-content bg-purple"> sahfdafhjkahfjksdhf</div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple-light"> sahfdafhjkahfjksdhf</div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple"> sahfdafhjkahfjksdhf</div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple-light"> sahfdafhjkahfjksdhf</div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div> sahfdhfjksdhf</el-col>
      <el-col :span="3"><div class="grid-content bg-purple-light"> sahfdafhjkahfjksdhf</div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div> sahfdafhjkahfjksdhf</el-col>
      <el-col :span="3"><div class="grid-content bg-purple-light"> sahfdafhjkahfjksdhf</div></el-col>
    </el-row>
  </div>
</template>
<script>
import ImageSlider from "@/components/ImageSlider.vue";
export default {
  name: "HomePageNew",
  components: {
    ImageSlider
  }
}
</script>
<style scoped>
.Image_full{
  width: inherit;
}
.el-row {
  margin-bottom: 0px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 0px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 50px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
