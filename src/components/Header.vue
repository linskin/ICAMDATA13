<template>
    <el-menu
        :ellipsis="true"
        mode="horizontal"
        style="width: 100%"
        router>
      <el-menu-item><span class="text">13TH ICAMDATA</span></el-menu-item>

      <el-menu-item index="/"><span class="text">HOME</span></el-menu-item>

      <el-menu-item index="/Committees"><span class="text">COMMITTEES</span></el-menu-item>

      <el-sub-menu>
        <template #title><span class="text">PROGRAMME</span></template>
        <el-menu-item index="/InvitedSpeakers"><span class="text">INVITED SPEAKERS</span></el-menu-item>
        <el-menu-item index="/DataBase"><span class="text">DATABASE</span></el-menu-item>
        <el-menu-item index="/Schdule"><span class="text">SCHDULE</span></el-menu-item>
        <el-menu-item index="/PosterSession"><span class="text">POSTER SESSION</span></el-menu-item>
        <el-menu-item index="/BestPosterAwards"><span class="text">BEST POSTER AWARDS（*）</span></el-menu-item>
        <el-menu-item index="/SatelliteMeeting"><span class="text">SATELLITE MEETING</span></el-menu-item>
        <el-menu-item index="/IcamdataCollections"><span class="text">ICAMDATA COLLECTIONS</span></el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="3">
        <template #title><span class="text">VENUE</span></template>
        <el-menu-item index="/GanSuProvince"><span class="text">GANSU PROVINCE</span></el-menu-item>
        <el-menu-item index="/Lanzhou"><span class="text">LAN ZHOU</span></el-menu-item>
        <el-menu-item index="/Northwest_Normal_University"><span class="text">NORTHWEST NORMAL UNIVERSITY</span></el-menu-item>
        <el-menu-item index="/Accommodation"><span class="text">ACCOMMODATION</span></el-menu-item>
        <el-menu-item index="/Travel_Info"><span class="text">TRAVEL INFO</span></el-menu-item>
      </el-sub-menu>

      <el-menu-item index="/Registration"><span class="text">REGISTRATION</span></el-menu-item>

      <el-menu-item index="/DataTime"><span class="text">DATATIME</span></el-menu-item>

      <el-menu-item><span class="text"><a href="https://physics.nist.gov/Icamdata/Homepage/charter.html" >ICAMDATA CHAPTER</a></span></el-menu-item>

      <el-menu-item><span class="text"><a href="https://physics.nist.gov/Icamdata/Homepage/icamdata.html">HISTORY</a></span></el-menu-item>

      <div style="flex-grow: 0.8"/>

      <el-menu-item index="/LogIn"><span class="text">LOG IN</span></el-menu-item>

      <el-menu-item index="/LogUp"><span class="text">LOG UP</span></el-menu-item>
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
.text{
font-size: 16px;
}
</style>
