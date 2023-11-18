<template>
  <el-row>
    <el-col :span="24" style="margin-bottom: 1%;margin-top: 1%">
      <p class="head">
        <span class="textm">ICAMDATA 2024</span><br/>
        <span class="textm1">The 13th International Conference on Atomic and Molecular Data and Their Applications</span><br/>
        <span class="textm2">Lanzhou，September 22-25, 2024</span>
      </p>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <p>
        <span><img src="../components/icons/img_8.png" alt="alt" style="width: 100%"/></span>
      </p>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <el-menu
               default-active="1"
               class="el-menu-vertical-demo"
               mode="horizontal"
               :ellipsis="true"
               router
      >
        <el-menu-item class="heads" index="/"><span class="texts">HOME</span></el-menu-item>

        <el-menu-item class="heads" index="/Committees"><span class="texts">COMMITTEES</span></el-menu-item>
        <el-menu-item index="/InvitedSpeaker"><span class="texts">INVITED SPEAKERS</span></el-menu-item>
        <el-sub-menu class="heads">
          <template #title><span class="texts">PROGRAMME</span></template>
          <el-menu-item index="/Programme/Schdule" ><span class="texts">SCHEDULE</span></el-menu-item>
          <el-menu-item index="/Programme/PosterSession" ><span class="texts">POSTER SESSION</span></el-menu-item>
          <el-menu-item index="/Programme/BestPosterAwards" ><span class="texts">BEST POSTER AWARDS</span></el-menu-item>
          <el-menu-item index="/Programme/SatelliteMeeting" ><span class="texts">SATELLITE MEETING</span></el-menu-item>
          <el-menu-item index="/Programme/IcamdataCollections"><span class="texts">ICAMDATA Proceeding</span></el-menu-item>
        </el-sub-menu>

        <el-sub-menu class="heads" index="3">
          <template #title><span class="texts">VENUE</span></template>
          <el-menu-item index="/VENUE/Northwest_Normal_University" ><span class="texts">NORTHWEST NORMAL UNIVERSITY</span></el-menu-item>
          <el-menu-item ><span class="texts" ><a style="text-decoration: none;width: 100%;color: inherit" href="http://lanzhou.gogansu.com/" target="_blank">Lanzhou</a></span></el-menu-item>
          <el-menu-item index="/VENUE/Accommodation" ><span class="texts">ACCOMMODATION</span></el-menu-item>
          <el-menu-item index="/VENUE/Travel_Info"><span class="texts">TRAVEL INFO</span></el-menu-item>
        </el-sub-menu>

        <el-menu-item class="heads" index="/Registration"><span class="texts">REGISTRATION</span></el-menu-item>

        <el-menu-item class="heads" index="/DataTime"><span class="texts">DATETIME</span></el-menu-item>

        <el-menu-item class="heads"><span class="texts"><a style="text-decoration: none" href="https://physics.nist.gov/Icamdata/Homepage/charter.html" target="_blank">ICAMDATA CHAPTER</a></span></el-menu-item>

        <el-menu-item class="heads"><span class="texts"><a style="text-decoration: none" href="https://physics.nist.gov/Icamdata/Homepage/icamdata.html" target="_blank">HISTORY</a></span></el-menu-item>

        <el-menu-item class="heads" index="/LogIn" disabled><span class="texts">LOG IN</span></el-menu-item>

        <el-menu-item class="heads" index="/LogIn" disabled><span class="texts"></span></el-menu-item>

      </el-menu>
    </el-col>
  </el-row>

</template>
<script>
export default {
  data() {
    return {
      isCollapse: false // 默认不折叠
    };
  }
};

</script>
<style>
.head{
  text-align: center;
}
.heads{
  width: 100%;
}
.texts{
  color: #000000;
  font-family: "微软雅黑", sans-serif;
  //font-size: 0.85vw;
  text-align: center;
}
.textm{
  color: #1768a6;
  font-size: 2.2vw;
  font-weight: bold;
  font-family: "微软雅黑 ", sans-serif;
}
.textm1{
  color: #1768a6;
  font-size: 1.6vw;
  font-weight: bold;
  font-family: "微软雅黑 ", sans-serif;
}
.textm2{
  color: #1768a6;
  font-size: 1.4vw;
  line-height: 1.4;
  font-family: "微软雅黑", sans-serif;
}

</style>
