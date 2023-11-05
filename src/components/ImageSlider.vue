
<template>
  <swiper
      :space-between="0"
      :effect="'fade'"
      :pagination="{
      dynamicBullets: false,
    }"
      :navigation = "false"
      :autoplay="{
        delay: 4000,
        disableOnInteraction:true
      }"
      :modules="modules"
      class="mySwiper"
  >
<!--    <swiper-slide><img src="./icons/img.png"  alt="" class="img_holder"/></swiper-slide>-->
    <swiper-slide><img src="./icons/baitashi2.png"  alt="" class="img_holder"/></swiper-slide>
    <swiper-slide><img src="./icons/maijisan.jpg"  alt="" class="img_holder"/></swiper-slide>
    <swiper-slide><img src="./icons/dunhuang.jpg"  alt="" class="img_holder"/></swiper-slide>
    <swiper-slide><img src="./icons/img_6.png"  alt="" class="img_holder"/></swiper-slide>
    <swiper-slide><img src="./icons/gannancaoyuan.png"  alt="" class="img_holder"/></swiper-slide>
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
}
.img_holder{
  margin: 10px;
//background-color: #181818;
  width:100%;
}
</style>