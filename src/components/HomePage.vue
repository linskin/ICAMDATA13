
<template >
<!--  <ImageSlider/>-->
  <div class="container_homepage" >
    <ImageSlider class="Image_full"/>
<!--    <img src="src/assets/photo.png"  alt="这是一个图片">-->
<!--    <image-slider></image-slider>-->
    <div class="con_little_table">
    credits<br>
    <table><tbody>
    <tr><td><i>new</i> Harbour </td><td align="right"> (Vincenzo Lombardo) </td></tr>
    <tr><td>Roberti Palace </td><td align="right"> (SabinoG.Photo) </td></tr>
    <tr><td>Loreto Church </td><td align="right"> (Vincenzo Lombardo) </td></tr>
    <tr><td>Angioino Castle </td><td align="right"> (photogallery of GAL SudEst Barese) </td></tr>
    </tbody></table>
  </div>

<!--文本-->
  <div class="mytext">
    <table width="90%">
      <tbody>
      <tr>
        <td width="100%">
          The International Conference on Atomic and Molecular Data and Their Applications (ICAMDATA) is a continuing series of international conferences that promotes the use of atomic and molecular (AM) data in various fields of science and technology, providing a forum for interaction of AM data producers and users and for information exchange on AM data needs and availability, and fostering the cross-disciplinary cooperation between the AM data producers and users and the coordination of AM data activities and databases worldwide.
          <br>
          <br>
          The topics covered by the Conference are
          <br>
          <ol>
            <li>
              <b>Application and needs of atomic and molecular data</b>
              <ul>
                <li> Astrophysics and atmospheric physics </li>
                <li> Inertial and magnetic fusion </li>
                <li> Low and high temperature laboratory plasma and industrial plasmas </li>
                <li> Lighting sciences and technology </li>
                <li> Biomedicine and biophysics </li>
                <li> Combustion and environmental sciences and technology </li>
                <li> Surface physics, gaseous electronics, solid state optics and spectroscopy, optoelectronics, etc. </li>
              </ul>
            </li>
            <li>
              <b>Atomic and molecular data production</b>
              <ul>
                <li> Data collection, assessment, exchange and dissemination </li>
                <li>Standardization of data formats </li>
                <li> AM databases, activities of data centers</li>
              </ul>
            </li>
            <li>
              <b>Experimental and theoretical methods for atomic and molecular data generation</b>
              <ul>
                <li> Atomic and molecular structure, spectroscopy and radiative processes </li>
                <li> Electron and photon collisions with atoms and molecules </li>
                <li> Heavy particle collisions </li>
                <li> Particle-surface interactions. </li>
              </ul>
            </li>
          </ol>
          <br><br>
          The scientific programme will include invited and contributed talks in the regular sessions, a poster session and special sessions devoted to uncertainty quantification and database demonstrations.
          <br><br>
          13th ICAMDATA, hosted by the NWNU, constituted in Comitato Organizzatore di ICAMDATA 2020&star;, in the beautiful scenario of the
          <a href="https://www.comune.moladibari.ba.it/" target="_blank">Mola di Bari town</a>
          , is organized in cooperation with the
          <a href="https://www.iaea.org/" target="_blank">International Atomic Energy Agency (IAEA)</a>
          , with the patronage of the <a href="https://www.istp.cnr.it/" target="_blank">Institute for Plasma Science and Technology (ISTP)</a>
          , of the <a href="http://www.en.poliba.it/" target="_blank">Polytechnic of Bari</a>
          and of the <a href="https://www.comune.moladibari.ba.it/" target="_blank">Municipality of Mola di Bari</a>
          , and the event is sponsored by <a href="https://www.cfa.harvard.edu/sao" target="_blank">Smithsonian Astrophysical Observatory (SAO)</a>
          and the  <a href="https://www.mdpi.com/journal/entropy" target="_blank">MDPI Journal <i>Entropy</i></a>.
          <br><br><br>
          <hr>
          &star; Comitato Organizzatore di ICAMDATA 2023 (Via E Orabona 4 – Bari 70126 CF: 93503700721) is a non-profit organization whose only scope is to organize the 13th ICAMDATA
        </td>
      </tr>
      </tbody>
    </table>

  </div>


</div>

</template>


<script >
// import ImageSlider from './ImageSlider.vue';
// import { Swiper, SwiperSlide } from 'swiper/vue';
import ImageSlider from "@/components/ImageSlider.vue";
// Import Swiper styles
import 'swiper/css';

export default {
  name: "HomePAge",
  components: {
    ImageSlider
  },

};
</script>

<style scoped>
/* 你可以在这里添加组件的样式 */
.container_homepage {
  //position: fixed;
  background-color: #006cff;
  width: inherit;
  //height: 100vh; /* 设置容器的高度，可以根据需要调整 */
  //line-height: 100vh; /* 垂直居中 */
}
.Image_full{
  width: inherit;
}
.mytext{
  //top:10px;
  background-color: #f80707;
  font-size: 100%;
  font-style: normal
}
.con_little_table{
  position:absolute;
  top:300px;
  left:50px;
  max-width:40%;
  /*悬浮table*/
  background-color:#ffffff;
  text-align: justify;
  padding:20px 20px 20px;
  font-size:80%;
  z-index: 2;
  opacity:0.7;
  animation:caption 1s;
  -webkit-animation:caption 1s
}
</style>
<!-- 在你的Vue组件文件中，比如 MyComponent.vue -->

<!--<link href="./class_for_homepage.css" rel="stylesheet" type="text/css">-->