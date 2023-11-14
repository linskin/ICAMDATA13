<template>
<!--  <el-row>-->
<!--    <el-col :span="18" :offset="3" style="margin-bottom: 3%">-->
<!--      <div>-->
<!--&lt;!&ndash;        <img src="../components/icons/foot.jpg">&ndash;&gt;-->
<!--      </div>-->
<!--    </el-col>-->
<!--    </el-row>-->

<!--    <el-row>-->
    <el-menu
        :ellipsis="false"
        mode="horizontal"
        style="width: 100%;"
        router>
      <el-menu-item class="head1"><span class="text">13TH ICAMDATA</span></el-menu-item>

      <el-menu-item class="head2" index="/"><span class="text">HOME</span></el-menu-item>

      <el-menu-item class="head3" index="/Committees"><span class="text">COMMITTEES</span></el-menu-item>
      <el-menu-item index="/InvitedSpeaker"><span class="text">INVITED SPEAKERS</span></el-menu-item>
      <el-sub-menu class="head4">
        <template #title><span class="text">PROGRAMME</span></template>
        <!--        <el-menu-item index="/Programme/InvitedSpeakers" ><span class="text">INVITED SPEAKERS</span></el-menu-item>-->
        <el-menu-item index="/Programme/DateBaseNew"><span class="text">DATABASE</span></el-menu-item>
        <el-menu-item index="/Programme/Schdule" ><span class="text">SCHEDULE</span></el-menu-item>
        <el-menu-item index="/Programme/PosterSession" ><span class="text">POSTER SESSION</span></el-menu-item>
        <el-menu-item index="/Programme/BestPosterAwards" ><span class="text">BEST POSTER AWARDS</span></el-menu-item>
        <el-menu-item index="/Programme/SatelliteMeeting" ><span class="text">SATELLITE MEETING</span></el-menu-item>
        <el-menu-item index="/Programme/IcamdataCollections"><span class="text">PROCEEDINGS</span></el-menu-item>
      </el-sub-menu>

      <el-sub-menu class="head5" index="3">
        <template #title><span class="text">VENUE</span></template>
        <!--        <el-menu-item index="/VENUE/GanSuProvince" ><span class="text">GANSU PROVINCE</span></el-menu-item>-->
        <el-menu-item ><span class="text" ><a style="text-underline: none" href="http://lanzhou.gogansu.com/">Lan Zhou</a></span></el-menu-item>
        <el-menu-item index="/VENUE/Northwest_Normal_University" ><span class="text">NORTHWEST NORMAL UNIVERSITY</span></el-menu-item>
        <el-menu-item index="/VENUE/Accommodation" ><span class="text">ACCOMMODATION</span></el-menu-item>
        <el-menu-item index="/VENUE/Travel_Info"><span class="text">TRAVEL INFO</span></el-menu-item>
      </el-sub-menu>

      <el-menu-item class="head6" index="/Registration"><span class="text">REGISTRATION</span></el-menu-item>

      <el-menu-item class="head7" index="/DataTime"><span class="text">DATETIME</span></el-menu-item>

      <el-menu-item class="head8"><span class="text"><a href="https://physics.nist.gov/Icamdata/Homepage/charter.html" >ICAMDATA CHAPTER</a></span></el-menu-item>

      <el-menu-item class="head9"><span class="text"><a href="https://physics.nist.gov/Icamdata/Homepage/icamdata.html">HISTORY</a></span></el-menu-item>

      <div style="flex-grow: 0.8"/>

      <el-menu-item class="head10" index="/LogIn" disabled><span class="text">LOG IN</span></el-menu-item>

<!--      <el-menu-item index="/LogUp" ><span class="text">LOG UP</span></el-menu-item>-->
    </el-menu>
<!--  </el-row>-->

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
@media  {
  .text{
    font-size:0.9vw;
  }
}
.head1{
  width: 9vw;
  padding: 0;
}
.head2{
  width: 5vw;
  padding: 0;
}
.head3{
  width: 8vw;
  padding: 0;
}
.head4{
  width: 9vw;
  padding: 0;
}
.head5{
  width: 6.5vw;
  padding: 0;
}
.head6{
  width: 9vw;
  padding: 0;
}
.head7{
  width: 6.5vw;
  padding: 0;
}
.head8{
  width: 11vw;
  padding: 0;
}
.head9{
  width: 6vw;
  padding: 0;
}
.head10{
  width: 5vw;
  padding: 0;
}
</style>
