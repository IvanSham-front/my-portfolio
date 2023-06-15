<template>
  <section class="page-section skills-block" ref="skillsElem">
    <h2 class="title page-section__title skills-block__title" ref="skillsElem" id="services-js">Что я делаю</h2>
    <svg class="visually-hidden">
      <linearGradient id="linearGradient" x1="100%" y1="0" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00d366"></stop>
        <stop offset="100%" stop-color="#5a89ff"></stop>
      </linearGradient>
    </svg>
    <transition-group
      class="skills-list skills-block__list"
      @click="displaySkills"
      tag="ul"
      name="display-skill-block"
    >
      <li
        v-for="(item, index) in skillsItems"
        :key="index"
        :class="['skills-list__li', {'skills-list__li_show': item.visible}]"
      >
        <component :is="item.icon" class="skills-list__icon" fill="url(#linearGradient)"></component>
        <p class="skills-list__text">{{ item.text }}</p>
      </li>
    </transition-group>

    <a class="btn page-section__button" id="buttonFindCost-js" href="#portfolio-js">Посмотреть примеры</a>
  </section>
</template>

<script>
import Icon1 from "./svg/sprites/icon-1.vue";
import Icon2 from "./svg/sprites/icon-2.vue";
import ReactIcon from "./svg/sprites/react-icon.vue";
import ReduxIcon from "./svg/sprites/redux-icon.vue";
import VueIcon from "./svg/sprites/vue-icon.vue";
import TsIcon from "./svg/sprites/ts-icon.vue";
import NextJsIcon from "./svg/sprites/next-js-icon.vue";
import BemIcon from "./svg/sprites/bem-icon.vue";

export default {
  name: "skills-block",
  data() {
    return {
      showSkill: false,
      skillsItems: [
        {
          text: "Верстка лендинг-страниц и сайтов любой сложности",
          visible: false,
          icon: 'Icon1'
        },
        {
          text: "Адаптивная верстка под все браузеры и устройства",
          visible: false,
          icon: 'Icon2'
        },
        {
          text: "Верстка по методологии БЭМ",
          visible: false,
          icon: 'BemIcon'
        },
        {
          text: "Управление состоянием приложения c Redux",
          visible: false,
          icon: 'ReduxIcon'
        },
        {
          text: "Разработка и доработка веб-приложений на React.js",
          visible: false,
          icon: 'ReactIcon'
        },
        {
          text: "Разработка и доработка веб-приложений на Vue.js",
          visible: false,
          icon: 'VueIcon'
        },
        {
          text: "Разработка веб-приложений с использованием TypeScript",
          visible: false,
          icon: 'TsIcon'
        },
        {
          text: "Разработка c использованием Next.js",
          visible: false,
          icon: 'NextJsIcon'
        }
      ]
    };
  },
  components: {
    Icon1,
    Icon2,
    ReactIcon,
    VueIcon,
    TsIcon,
    NextJsIcon,
    ReduxIcon,
    BemIcon
  },
  methods: {
    displaySkills() {
      this.skillsItems.forEach((item, index) => {
        setTimeout(() => {
          item.visible = true;
        }, (index + 1) * 500);
      });
    },
    onElementObserved(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.displaySkills();
        }
      });
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: null,
      threshold: .3
    });
    setTimeout(() => {
      this.observer.observe(this.$refs.skillsElem);
    }, 500);
  }
};
</script>
