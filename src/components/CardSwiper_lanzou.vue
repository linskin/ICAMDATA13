<template>
  <swiper
      :slidesPerView="4"
      :spaceBetween="2"
      :autoplay="{
        delay: 3000,
        disableOnInteraction:true
      }"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide class="back">Slide 1</swiper-slide>
    <swiper-slide class="back">Slide 2</swiper-slide>
    <swiper-slide class="back">Slide 3</swiper-slide>
    <swiper-slide class="back">Slide 4</swiper-slide>
    <swiper-slide class="back">Slide 5</swiper-slide>
    <swiper-slide class="back">Slide 6</swiper-slide>
    <swiper-slide class="back">Slide 7</swiper-slide>
    <swiper-slide class="back">Slide 8</swiper-slide>
    <swiper-slide class="back">Slide 9</swiper-slide>
    <swiper-slide class="back">Slide 0</swiper-slide>
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
  height: 20vh;
}
</style>
