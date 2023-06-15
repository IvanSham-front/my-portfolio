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
      ></button>

      <nav class="nav nav_hidden">
        <ul class="nav__menu" id="hiddenMenu-js">
          <li class="nav__item">
            <a href="#services-js">Услуги</a>
          </li>

          <li class="nav__item">
            <a href="#portfolio-js">Портфолио</a>
          </li>

          <li class="nav__item">
            <a href="#cost-js">Стоимость</a>
          </li>
        </ul>
      </nav>

      <nav
        class="nav nav-mobile"
        :class="openMenu && 'nav-mobile_open'"
        aria-controls="dropDownMenu-js"
      >
        <div class="nav-overlay" @click="clickCloseMenu" ref="overlayEl"></div>
        <ul class="nav__menu" ref="hiddenMenu">
          <li class="nav__item" @click="clickCloseMenu">
            <a href="#services-js">Услуги</a>
          </li>

          <li class="nav__item" @click="clickCloseMenu">
            <a href="#portfolio-js">Портфолио</a>
          </li>

          <li class="nav__item" @click="clickCloseMenu">
            <a href="#cost-js">Стоимость</a>
          </li>
        </ul>
      </nav>

      <div class="block-phone header__right-block">
        <a href="tel:+74999955577" class="block-phone__number">+7 (499) 995-55-77</a>

        <a
          href="#openModal-js"
          id="openModalButton-js"
          class="btn block-phone__button btn_pink"
          aria-label="Заказать звонок"
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
import phoneIcon from "./svg/sprites/phone-icon.vue";

export default {
  name: "header-element",
  data() {
    return {
      openMenu: false
    };
  },
  components: { phoneIcon },
  computed: {
    // scrollWidth() {
    //   const div = document.createElement("div");
    //   div.style.overflowY = "scroll";
    //   div.style.width = "50px";
    //   div.style.height = "50px";
    //   document.body.append(div);
    //   const scrollWidth = div.offsetWidth - div.clientWidth;
    //   div.remove();
    //   return scrollWidth;
    // }
  },
  methods: {
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
    }
  }
};
</script>