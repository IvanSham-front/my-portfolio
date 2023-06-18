<template>
  <header class="header">
    <div class="fixed-container header__inner">
      <button
        class="burger-button"
        id="dropDownMenu-js"
        type="button"
        aria-expanded="false"
        aria-controls="hiddenMenu-js"
        aria-label="Развернуть меню"
        @click="clickOpenMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav nav_hidden">
        <button class="nav__button toggle-theme" @click="toggleTheme">
          <themeToggleIcon/>
        </button>

        <ul class="nav__menu" id="hiddenMenu-js">
          <li class="nav__item">
            <a href="#services-js">Услуги</a>
          </li>

          <li class="nav__item">
            <a href="#portfolio-js">Портфолио</a>
          </li>
        </ul>
      </nav>

      <nav
        class="nav nav-mobile"
        :class="openMenu && 'nav-mobile_open'"
        aria-controls="dropDownMenu-js"
      >
        <div class="nav-overlay" @click="clickCloseMenu" ref="overlayEl"></div>
        <ul class="nav__menu" :class="darkTheme && 'dark'" ref="hiddenMenu">
          <button class="nav__button toggle-theme" @click="toggleTheme">
            <themeToggleIcon/>
          </button>

          <li class="nav__item" @click="clickCloseMenu">
            <a href="#services-js">Услуги</a>
          </li>

          <li class="nav__item" @click="clickCloseMenu">
            <a href="#portfolio-js">Портфолио</a>
          </li>
        </ul>
      </nav>

      <div class="block-phone header__right-block">
        <a href="tel:+79620114705" class="block-phone__number">+7 (962) 011-47-05</a>

        <a
          href="#openModal-js"
          id="openModalButton-js"
          class="btn block-phone__button btn_pink"
          :class="darkTheme && 'dark'"
          aria-label="Заказать звонок"
          @click="openModalCallback"
        >
          <phone-icon class="block-phone__icon"></phone-icon>
          <span class="block-phone__text">Заказать звонок</span>
        </a>
      </div>
    </div>
    <!-- fixed-container -->
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import phoneIcon from "./svg/sprites/phone-icon.vue";
import themeToggleIcon from "./svg/sprites/theme-toggle-icon.vue";

export default {
  name: "header-element",
  data() {
    return {
      openMenu: false
    };
  },
  components: { phoneIcon, themeToggleIcon },
  methods: {
    ...mapActions(["SET_MODAL", "SET_DARK_THEME"]),
    openModalCallback(e) {
      e.preventDefault();
      this.SET_MODAL("callback-modal");
    },
    clickOpenMenu() {
      this.openMenu = true;
    },
    clickCloseMenu() {
      this.$refs.hiddenMenu.classList.add("nav__menu_close");
      this.$refs.overlayEl.classList.add("nav-overlay_close");
      setTimeout(() => {
        this.openMenu = false;
        this.$refs.hiddenMenu.classList.remove("nav__menu_close");
        this.$refs.overlayEl.classList.remove("nav-overlay_close");
      }, 300);
    },
    toggleTheme() {
      this.SET_DARK_THEME(!this.darkTheme);
    }
  },
  computed: {
    ...mapGetters(["darkTheme"])
  }
};
</script>