<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import TheImageCard from "./TheImageCard.vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
// import required modules
import { EffectCube, Pagination, Autoplay, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
    TheImageCard,
  },
  setup() {
    return {
      modules: [EffectCube, Pagination, Autoplay, Navigation],
    };
  },
};
</script>

<template>
  <swiper
    :loop="true"
    :navigation="true"
    :pagination="{ clickable: true }"
    :autoplay="{ delay: 30000 }"
    :modules="modules"
    :slidesPerView="1" :spaceBetween="10"
    :breakpoints="{
        '600': {
            slidesPerView: 2,
        },
        '900': {
            slidesPerView: 3,
        },
    }"
    class="mySwiper"
  >
    <swiper-slide>
      <the-image-card pichaSource="/img/Library1.jpg" text="Maktaba ya yetu ikiwa na vitabu mbalimbali"/>
    </swiper-slide>

    <!-- 2 -->
    <swiper-slide>
      <the-image-card  text="Kundi la waumini wakizunguka Al-Qaaba " pichaSource="/img/worship_crowded_mecca_hd_ramzan.jpg" />
    </swiper-slide>
    <!-- 3 -->
    <!-- <swiper-slide>
      <the-image-card pichaSource="/img/worship_in_mecca_hd_ramzan.jpg"/>
    </swiper-slide> -->
    <!-- 4 -->
    <swiper-slide>
      <the-image-card pichaSource="/img/IMG-20241021-WA0003.jpg" text="Hayat Sheikh Hamis Said Mituro"/>
    
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.mySwiper {
  width: 100%;
  height: 300px;
  z-index: 0;
  margin: 20px 0;
}


@media (min-width: 768px) {
  .mySwiper {
    height:400px;
  }
}
</style>
