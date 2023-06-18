<template>
  <section class="face fixed-container" ref="faceRootEl">
    <figure class="face__figure">
      <div class="face__ellipse-background" ref="ellipseEl"></div>

      <picture>
        <source
          media="(min-width: 1024px)"
          type="image/webp"
          srcset="../assets/img/human-tablet.webp 1x, ../assets/img/human-tablet-2x.webp 2x"
        >

        <source type="image/webp" srcset="../assets/img/human-mobile.webp 1x, ../assets/img/human-mobile-2x.webp 2x">

        <source
          media="(min-width: 1024px)"
          srcset="../assets/img/human-tablet.png 1x, ../assets/img/human-tablet-2x.png 2x"
        >

        <img
          class="face__picture-human"
          src="../assets/img/human-mobile.png"
          srcset="../assets/img/human-mobile-2x.png 2x"
          alt="Иван Шаменков"
        >
      </picture>

      <div class="flying-elements" ref="flyingElems">
        <ul class="flying-elements__ul">
          <li class="flying-elements__li">
            <span class="flying-elements__item flying-elements__item_hash">#</span>
          </li>

          <li class="flying-elements__li">
            <span class="flying-elements__item flying-elements__item_braces">{ }</span>
          </li>

          <li class="flying-elements__li">
            <span class="flying-elements__item flying-elements__item_slash">&lt;/&gt;</span>
          </li>

          <li class="flying-elements__li">
            <span class="flying-elements__item flying-elements__item_first-div">&lt;div&gt;</span>
          </li>

          <li class="flying-elements__li">
            <span class="flying-elements__item flying-elements__item_second-div">&lt;div&gt;</span>
          </li>
        </ul>
      </div>

      <figcaption class="face__text" :class="darkTheme && 'dark'">
        <h1 class="title face__title">
          Иван Шаменков
          <span class="face__conception">Frontend-разработчик</span>
        </h1>

        <a href="#services-js" class="btn face__button">Узнать больше</a>
      </figcaption>
    </figure>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "face-section",
  methods: {
    parralaxEffect(evt) {
      const flyingElems = this.$refs.flyingElems
      const wrapper = this.$refs.faceRootEl
      const clientX = evt.clientX
      const clientY = evt.clientY
      const parallaxLeftOffset = wrapper.getBoundingClientRect().left;
      const parallaxTopOffset = wrapper.getBoundingClientRect().top
      const coordX = clientX - parallaxLeftOffset - (0.5 * wrapper.offsetWidth);
      const coordY = clientY - parallaxTopOffset - (0.5 * wrapper.offsetHeight);
      let layerSpeed = 0.05
      const x =  - (coordX * layerSpeed).toFixed(2);
      const y = - (coordY * layerSpeed).toFixed(2);
      flyingElems.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
    }
  },
  mounted() {
    this.$refs.faceRootEl.addEventListener('mousemove', this.parralaxEffect)
  },
  computed: {
    ...mapGetters(['darkTheme'])
  }
};
</script>
