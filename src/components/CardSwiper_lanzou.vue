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
    <swiper-slide class="back"><img src="../components/icons/001.png"/></swiper-slide>
    <swiper-slide class="back"><img src="../components/icons/002.jpg"/></swiper-slide>
    <swiper-slide class="back"><img src="../components/icons/003.jpg"/></swiper-slide>
    <swiper-slide class="back"><img src="../components/icons/004.jpg"/></swiper-slide>
    <swiper-slide class="back"><img src="../components/icons/005.jpg"/></swiper-slide>
    <swiper-slide class="back"><img src="../components/icons/006.jpg"/></swiper-slide>
    <swiper-slide class="back"><img src="../components/icons/007.jpg"/></swiper-slide>
    <swiper-slide class="back"><img src="../components/icons/008.jpg"/></swiper-slide>
    <swiper-slide class="back"><img src="../components/icons/009.jpg"/></swiper-slide>
    <swiper-slide class="back"><img src="../components/icons/010.jpg"/></swiper-slide>
    <swiper-slide class="back"><img src="../components/icons/011.jpg"/></swiper-slide>
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
  background-color: rgba(72, 71, 71, 0.07);
}
.mySwiper{
  height: 27vh;
}
</style>
