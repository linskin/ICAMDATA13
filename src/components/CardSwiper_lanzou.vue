<template>
  <swiper
      :slidesPerView="4"
      :spaceBetween="2"
      :autoplay="{
        delay: 1800,
        disableOnInteraction:true
      }"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide><img src="../components/icons/001.png" alt="" class="back"/></swiper-slide>
    <swiper-slide><img src="../components/icons/002.jpg" alt="" class="back"/></swiper-slide>
    <swiper-slide><img src="../components/icons/003.jpg" alt="" class="back"/></swiper-slide>
    <swiper-slide><img src="../components/icons/004.jpg" alt="" class="back"/></swiper-slide>
    <swiper-slide><img src="../components/icons/005.jpg" alt="" class="back"/></swiper-slide>
    <swiper-slide><img src="../components/icons/006.jpg" alt="" class="back"/></swiper-slide>
    <swiper-slide><img src="../components/icons/007.jpg" alt="" class="back"/></swiper-slide>
    <swiper-slide><img src="../components/icons/008.jpg" alt="" class="back"/></swiper-slide>
    <swiper-slide><img src="../components/icons/009.jpg" alt="" class="back"/></swiper-slide>
    <swiper-slide><img src="../components/icons/010.jpg" alt="" class="back"/></swiper-slide>
    <swiper-slide><img src="../components/icons/011.jpg" alt="" class="back"/></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './style.css';

// import required modules
import {Autoplay, FreeMode, Pagination} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode, Pagination,Autoplay],
    };
  },
};

</script>
<style scoped>
.back{
  width: 100%;
  height: 100%;
}
.mySwiper{
  height: 27vh;
}
</style>
