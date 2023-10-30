<template>
  <div style="width: 100%">
    <el-menu
        :ellipsis="false"
        mode="horizontal"
        style="width: inherit"
        router>
      <el-menu-item><span>13TH ICAMDATA</span></el-menu-item>
      <el-menu-item index="/"><span>HOME</span></el-menu-item>
      <el-sub-menu index="3">
        <template #title><span>VENUE</span></template>
        <el-menu-item index="2-1">Lan Zhou</el-menu-item>
        <el-menu-item index="2-2"></el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="/register"><span>Register</span></el-menu-item>
      <el-menu-item index="/DataTime"><span>DataTime</span></el-menu-item>
      <el-menu-item ><span><a href="https://physics.nist.gov/Icamdata/Homepage/charter.html">ICAMDATA Chapter</a></span></el-menu-item>
      <el-menu-item ><span><a href="https://physics.nist.gov/Icamdata/Homepage/icamdata.html">History</a></span></el-menu-item>
      <div style="flex-grow: 1"/>
      <el-button style="margin-top: 15px">Upload you paper</el-button>
      <el-button style="margin-top: 15px">email</el-button>

    </el-menu>


  </div>
</template>
<script>
import DataTime from "@/view/DataTime.vue";

export default {
  name:"Header",
  components: {DataTime}
}

</script>
<style>

</style>
