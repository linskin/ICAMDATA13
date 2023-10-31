<template>
    <el-menu
        :ellipsis="true"
        mode="horizontal"
        style="width: 100%"
        router>
      <el-menu-item><span>13TH ICAMDATA</span></el-menu-item>
      <el-menu-item index="/"><span>HOME</span></el-menu-item>
      <el-menu-item index="/Committees"><span>COMMITTEES</span></el-menu-item>
      <el-sub-menu>
        <template #title><span>PROGRAMME</span></template>
        <el-menu-item index="/InvitedSpeakers">INVITED SPEAKERS</el-menu-item>
        <el-menu-item index="/DataBase">DATABASE</el-menu-item>
        <el-menu-item index="/Schdule">SCHDULE</el-menu-item>
        <el-menu-item index="/PosterSession">POSTER SESSION</el-menu-item>
        <el-menu-item index="/BestPosterAwards">BEST POSTER AWARDS（*）</el-menu-item>
        <el-menu-item index="/SatelliteMeeting">SATELLITE MEETING</el-menu-item>
        <el-menu-item index="/IcamdataCollections">ICAMDATA COLLECTIONS</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title><span>VENUE</span></template>
        <el-menu-item index="/GanSuProvince">GANSU PROVINCE</el-menu-item>
        <el-menu-item index="/Lanzhou">LAN ZHOU</el-menu-item>
        <el-menu-item index="/Northwest_Normal_University">NORTHWEST NORMAL UNIVERSITY</el-menu-item>
        <el-menu-item index="/Accommodation">ACCOMMODATION</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/Registration">REGISTRATION</el-menu-item>
      <el-menu-item index="/DataTime"><span>DATATIME</span></el-menu-item>
      <el-menu-item ><a href="https://physics.nist.gov/Icamdata/Homepage/charter.html" >ICAMDATA CHAPTER</a></el-menu-item>
      <el-menu-item style="margin-right: 30%"><a href="https://physics.nist.gov/Icamdata/Homepage/icamdata.html">HISTORY</a></el-menu-item>
      <el-menu-item index="/LogIn">LOG IN</el-menu-item>
      <el-menu-item index="/LogUp">LOG UP</el-menu-item>
    </el-menu>
</template>
<script>
import { ElMessageBox } from 'element-plus'

const open = () => {
  ElMessageBox.confirm(
      'Registration will be open at March 1, 2024.',
      'Warning',
      {
        confirmButtonText: 'OK',
        type: 'info',
        center: true,
      }
  )
}

</script>
<style>

</style>
