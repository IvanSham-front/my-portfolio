
<template>
  <div>
    <header-element/>

    <main class="main">
      <div class="fixed-container">
        <face-section/>

        <skills-block/>

        <examples-block/>
      </div>

      <advert-block/>

      <modals-widget/>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
  data() {},
  mounted() {
    const aServicesEl = document.querySelectorAll('a[href="#services-js"]');
    const aPortfolioEl = document.querySelectorAll('a[href="#portfolio-js"]');
    const aCostEl = document.querySelectorAll('a[href="#cost-js"]');
    const forServicesEl = document.querySelector('#services-js');
    const forPortfolioEl = document.querySelector('#portfolio-js');
    const forCostEl = document.querySelector('#cost-js');
    const aServicesElArr = Array.prototype.slice.call(aServicesEl);
    const aPortfolioElArr = Array.prototype.slice.call(aPortfolioEl);
    const aCostElArr = Array.prototype.slice.call(aCostEl);

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

    for (let i = 0; i < aCostElArr.length; i++) {
      aCostElArr[i].addEventListener("click", function(e) {
        e.preventDefault();
        forCostEl.scrollIntoView({ behavior: "smooth" });
      });
    }
  },
  computed: {
    ...mapGetters(['modal', 'currentExample', 'darkTheme'])
  }
};
</script>