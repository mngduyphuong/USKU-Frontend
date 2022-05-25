<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide
      ><img
        src="../assets/img/swiper01.png"
        class="img-fluid rounded mx-auto my-auto d-block"
    /></swiper-slide>
    <swiper-slide
      ><img
        src="../assets/img/swiper02.jpg"
        class="img-fluid rounded mx-auto my-auto d-block"
    /></swiper-slide>
    <swiper-slide
      ><img
        src="../assets/img/swiper04.jpg"
        class="img-fluid rounded mx-auto my-auto d-block"
    /></swiper-slide>
    <swiper-slide
      ><img
        src="../assets/img/swiper03.jpg"
        class="img-fluid rounded mx-auto my-auto d-block"
    /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'carrousel',
  data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false)
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
</script>
<style lang="scss" scoped>
@media (max-width: 768px) {
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next {
    display: none;
  }
}
</style>
