<template>
  <div>
  <el-menu
  mode="horizontal"
  style="width: inherit"
  router>
    <el-menu-item index="1"><span>13TH ICAMDATA</span></el-menu-item>
    <el-menu-item index="2"><span>HOME</span></el-menu-item>
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
    <el-menu-item index="5"><span>Register</span></el-menu-item>
    <el-menu-item index="4"><span>DataTime</span></el-menu-item>
    <el-menu-item ><span><a href="https://physics.nist.gov/Icamdata/Homepage/charter.html">ICAMDATA Chapter</a></span></el-menu-item>
    <el-menu-item ><span><a href="https://physics.nist.gov/Icamdata/Homepage/icamdata.html">History</a></span></el-menu-item>
  </el-menu>
  </div>
</template>
<script>
  export default {
    name:"Header"
  }

</script>
