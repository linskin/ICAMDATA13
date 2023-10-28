
<template>
  <swiper
      :space-between="30"
      :pagination="{
      dynamicBullets: true,
    }"
      :navigation = "false"
      :autoplay="{
        delay: 2000,
        disableOnInteraction:true
      }"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation'
import './ImageSliderStyle.css';

// import required modules
import { Pagination,Autoplay,Navigation} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination,Autoplay,Navigation],
    };
  },
};
</script>
<style>
.mySwiper{
  //position: relative;
  //left:0px;
  width: 100%;
  height: 500px;
}

</style>