
<template>
  <swiper
      :space-between="30"
      :effect="'fade'"
      :pagination="{
      dynamicBullets: false,
    }"
      :navigation = "false"
      :autoplay="{
        delay: 2000,
        disableOnInteraction:true
      }"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide><img src="src/components/icons/img.png"  alt=""/></swiper-slide>
    <swiper-slide><img src="src/components/icons/img_1.png"  alt=""/></swiper-slide>
    <swiper-slide><img src="src/components/icons/img_2.png"  alt=""/></swiper-slide>
<!--    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg"  alt=""/></swiper-slide>-->
<!--    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"  alt=""/></swiper-slide>-->
<!--    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg"  alt=""/></swiper-slide>-->
<!--    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg"  alt=""/></swiper-slide>-->
<!--    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg"  alt=""/></swiper-slide>-->
<!--    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"  alt=""/></swiper-slide>-->
<!--    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg"  alt=""/></swiper-slide>-->
<!--    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg"  alt=""/></swiper-slide>-->
<!--    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg"  alt=""/></swiper-slide>-->
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
import 'swiper/css/effect-fade'

// import required modules
import {Pagination, Autoplay, Navigation, EffectFade} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination,Autoplay,Navigation,EffectFade],
    };
  },
};
</script>
<style>
.mySwiper{
  //position: relative;
  //left:0px;
  //width: 100%;
  //height: 100vh;
  height: 700px;
}
</style>