<template>
  <div class="example-modal">
    <h3 class="title example-modal__title">{{ currentExample.title }}</h3>
    <p class="example-modal__description">{{ currentExample.description }}</p>
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :navigation="true"
      :modules="modules"
      :loop="true"
      :autoplay="{delay: 5000, disableOnInteraction: false}"
    >
      <swiper-slide v-for="(photo) in currentExample.photos" :key="photo.desktop">
        <div class="modal-example" :class="!photo.mobile && 'modal-example__desktop-only'">
          <img v-if="photo.mobile" :src="photo.mobile" class="modal-example__photo-mobile">
          <div class="modal-example__photo-desktop">
            <img :src="photo.desktop">
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <a
      v-if="currentExample.link"
      :href="currentExample.link"
      target="_blank"
      class="btn example-modal__link"
    >На сайт</a>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default {
  name: "example-modal",
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const store = useStore();
    const currentExample = store.state.currentExample;

    return {
      currentExample,
      modules: [Navigation, Autoplay]
    };
  }
};
</script>


<style>
.swiper-button-next {
  background: url("/img/arrow-right.svg") center no-repeat;
  width: 62px;
  height: 62px;
}
.swiper-button-prev {
  background: url("/img/arrow-left.svg") center no-repeat;
  width: 62px;
  height: 62px;
}

@media (max-width: 768px) {
  .swiper-button-prev,
  .swiper-button-next {
    background: none;
  }
}
</style>