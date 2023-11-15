<template>
<!--  <el-row>-->
<!--    <el-col :span="18" :offset="3" style="margin-bottom: 3%">-->
<!--      <div>-->
<!--&lt;!&ndash;        <img src="../components/icons/foot.jpg">&ndash;&gt;-->
<!--      </div>-->
<!--    </el-col>-->
<!--    </el-row>-->
  <el-row>
    <el-col :span="24" style="margin-bottom: 1%;margin-top: 1%">
      <p class="head">
        <span class="textm">ICAMDATA2024</span><br/>
        <span class="textm1">The 13t International Conference on Atomic and Molecular Data and Their Applications</span><br/>
        <span class="textm2">Lanzhou，September 22-25, 2024</span>
      </p>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <p class="head1">
        <span><img src="../components/icons/img_8.png" alt="alt" style="width: 100%"/></span>
      </p>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
        <el-menu
            mode="horizontal"
            :ellipsis="true"
            router
        >
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
            <el-menu-item index="/Programme/IcamdataCollections"><span class="text">ICAMDATACOLLECTIONS</span></el-menu-item>
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

          <el-menu-item class="head10" index="/LogIn" disabled><span class="text">LOG IN</span></el-menu-item>

          <!--      <el-menu-item index="/LogUp" ><span class="text">LOG UP</span></el-menu-item>-->
        </el-menu>

    </el-col>
  </el-row>
</template>
<script>
import { ElMessageBox } from 'element-plus'
import {defineComponent} from "vue";
import CardSwiper_lanzou from "@/components/CardSwiper_lanzou.vue";

export default defineComponent({
  components: {CardSwiper_lanzou}
})


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
.head{
  text-align: center;
}
.textm{
  color: #1768a6;
  font-size: 2.3vw;
  font-family: "微软雅黑 Light", sans-serif;
}
.textm1{
  color: #1768a6;
  font-size: 1.8vw;
  font-family: "微软雅黑 Light", sans-serif;
}
.textm2{
  color: #1768a6;
  font-size: 1.7vw;
  font-weight: bold;
  font-family: "微软雅黑 Light", sans-serif;
}
</style>
