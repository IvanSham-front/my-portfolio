
<template>
  <div>
    <header-element/>

    <main class="main">
      <face-section/>

      <skills-block/>

      <examples-block/>

      <footer-element/>
      <modals-widget/>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import headerElement from "./components/header-element.vue";
import faceSection from "./components/face-section.vue";
import skillsBlock from "./components/skills-block.vue";
import examplesBlock from "./components/examples-block.vue";
import footerElement from "./components/footer-element.vue";
import advertBlock from "./components/advert-block.vue";
import modalsWidget from "./components/modals/modals-widget.vue";

export default {
  name: "App",
  components: {
    headerElement,
    faceSection,
    skillsBlock,
    examplesBlock,
    footerElement,
    advertBlock,
    modalsWidget
  },
  mounted() {
    const aServicesEl = document.querySelectorAll('a[href="#services-js"]');
    const aPortfolioEl = document.querySelectorAll('a[href="#portfolio-js"]');
    const forServicesEl = document.querySelector("#services-js");
    const forPortfolioEl = document.querySelector("#portfolio-js");
    const aServicesElArr = Array.prototype.slice.call(aServicesEl);
    const aPortfolioElArr = Array.prototype.slice.call(aPortfolioEl);

    for (let i = 0; i < aServicesElArr.length; i++) {
      aServicesElArr[i].addEventListener("click", function(e) {
        e.preventDefault();
        forServicesEl.scrollIntoView({ behavior: "smooth" });
      });
    }

    for (let i = 0; i < aPortfolioElArr.length; i++) {
      aPortfolioElArr[i].addEventListener("click", function(e) {
        e.preventDefault();
        forPortfolioEl.scrollIntoView({ behavior: "smooth" });
      });
    }

    if (window.localStorage.getItem('theme') && window.localStorage.getItem('theme') === 'dark') {
      this.SET_DARK_THEME(true)
    }
  },
  watch: {
    darkTheme() {
      const body = document.body
      if (this.darkTheme) {
        body.classList.add('dark')
        window.localStorage.setItem('theme', 'dark')
      } else {
        body.classList.remove('dark')
        window.localStorage.setItem('theme', 'light')
      }
    }
  },
  computed: {
    ...mapGetters(["modal", "currentExample", "darkTheme"])
  },
  methods: {
    ...mapActions(["SET_DARK_THEME"])
  }
};
</script>