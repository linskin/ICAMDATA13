<script setup>

</script>

<template>
<div style="padding-left: 10vw;padding-right: 10vw">
  <el-row style="margin-bottom: 36%">
    <el-col :span="24">
      <div >
        <span>
          <img src="../components/icons/lable.jpg" alt="label"  class="floating-window-label"/>
        </span>
      </div>
      <div>
        <img src="../components/icons/NWNU.webp" style="z-index: -1;width: 79vw;position: fixed" alt="NWNU"/>
      </div>
    </el-col>
  </el-row>
  <el-row style="background-color: white ;opacity:0.95;">
    <el-col :span="18" :offset="3" style="margin-top: 2%">
      <h2 class="label"> 13th ICAMDATA Collection</h2>
      <b/>
      <p class="namoral">Invited speakers and all presenters contributing to the Conference scientific programme are invited to submit a regular paper in the Topical Issue of the European Physical Journal D
        Atomic and Molecular Data and Their Applications: ICAMDATA 2024
        Guest Editors: C Z Dong, X B Ding, (and others)</p>
    </el-col>
  </el-row>
  <el-row style="background-color: white ;opacity:0.95;">
    <el-col :span="18" :offset="3">
      <el-divider/>
      <h2 class="label">past ICAMDATA Conference Proceedings and Collections</h2>
      <p class="namoral">1997.Gaithersburg,Maryland.<span><a href="https://aip.scitation.org/toc/apc/434/1">AIP Conf.Proc.434</a></span>
        Peter J. Mohr and Wolfgang L. Wiese, eds. (AIP, Woodbury, NY, 1998)
        poster papers in NIST Special Pub. 926, Wolfgang L. Wiese and Peter J. Mohr, eds. (US GPO, Washington, DC, 1998).</p>
      <p class="namoral">2000. Oxford, England.<span><a href="https://aip.scitation.org/toc/apc/543/1">AIP Conf. Proc. 543</a></span>
        Keith A. Berrington and Kenneth Bell, eds. (AIP, Melville, NY, 2000).</p>
      <p class="namoral">2002. Gatlinburg, Tennessee.<span><a href="https://aip.scitation.org/toc/apc/636/1">AIP Conf.Proc.636</a></span>
        David R. Schultz, Predrag S. Krstic, and Fay Ownby, eds. (AIP, Melville, NY, 2002).</p>
      <p class="namoral">2004. Toki, Japan.<span><a href="https://aip.scitation.org/toc/apc/771/1">AIP Conf. Proc. 771</a></span>
        Takako Kato, Hisamichi Funaba and Daiji Kato, eds. (AIP, Melville, NY, 2005)
        contributed papers in J. Plasma Fusion Res. Ser. (JPFS-R) 7 (2006), T. Kato, H. Funaba, C. Suzuki, T. Minami, eds.
        meeting summary by R. K. Janev and T. Kato, Phys. Scr. 72, C6 (2005).</p>
      <p class="namoral">2006. Meudon, France.<span><a href="https://aip.scitation.org/toc/apc/901/1">AIP Conf. Proc. 901</a></span>
        Evelyne Roueff, ed. (AIP, Melville, NY, 2007).</p>
      <p class="namoral">2008. Beijing, China.<span><a href="https://aip.scitation.org/toc/apc/1125/1">AIP Conf. Proc. 1125</a></span>
        Shaoping Zhu and Jun Yan, eds. (AIP, Melville, NY, 2009).</p>
      <p class="namoral">2010. Vilnius, Lithuania.<span><a href="https://aip.scitation.org/toc/apc/1344/1">AIP Conf. Proc. 1344</a></span>
        A. Bernotas, R. Karazija, and Z. Rudzikas, eds. (AIP, Melville, NY, 2011).</p>
      <p class="namoral">2012. Gaithersburg, Maryland.<span><a href="https://aip.scitation.org/toc/apc/1545/1">AIP Conf. Proc. 1545</a></span>
        John D. Gillapsy, Wolfgang L. Wiese, and Yuri A. Podpaly, eds. (AIP, Melville, NY, 2013).</p>
      <p class="namoral">2014. Jena, Germany.<span><a href="https://iopscience.iop.org/issue/1402-4896/90/5"> Phys. Scr. 90 (5), 050201 (2015)</a></span>
        Stefan Schippers, Andrey Surzhykov, and Stephan Fritzsche, eds.</p>
      <p class="namoral">2016. Gunsan, South Korea.<span><a href="https://link.springer.com/journal/10053/topicalCollection/AC_65287f4a8ee5aba034e4cfd2c7c0c941">Eur. Phys. J. D (Topical Issue) (2017-2018)</a></span>
        Gordon W. F. Drake, Jung-Sik Yoon, Daiji Kato, and Grzegorz Karwasz, eds.</p>
      <p class="namoral">2018. Cambridge, Massachusetts.<span><a href="https://www.mdpi.com/journal/atoms/special_issues/Atomic-MolecularData">Atoms 7 (2019)</a></span>
        James F. Babb and Nancy Brickhouse, eds.
        <span><a href="https://projects.iq.harvard.edu/files/icamdata/files/icamdata-abs-final.pdf">contributed abstracts</a></span></p>
      <p class="namoral">2022. Mola di Bari, Italy.<span><a href="https://epjd.epj.org/component/toc/?task=topic&id=1858"> Eur. Phys. J. D (Topical Issue) (2023)</a></span>
        Annarita Laricchiuta, Iouli E. Gordon, Christian Hill, Gianpiero Colonna and Sylwia Ptasinska (Guest editors)</p>
    </el-col>
  </el-row>
</div>

</template>

<style scoped>
.namoral
{
  margin:2vh;
  font-size:13pt;
  font-family:"微软雅黑",sans-serif;
}
.label
{
  margin:0;
  font-size:18pt;
  font-weight: bold;
  font-family:"微软雅黑",sans-serif;
}
.floating-window-label{
  position:absolute;
  margin-top: 10%;
  //top:10%;
  right:3%;
  width: 45%;
  z-index: 2;
  opacity:0.7;
}
@media (max-width : 1500px) {
.namoral{
  font-size: 14pt;
}
  .label{
    font-size: 16pt;
  }
}
p{}
</style>