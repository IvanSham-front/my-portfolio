<template>
  <footer class="footer" :class="darkTheme && 'dark'">
    <div class="fixed-container footer__inner">
      <div class="nav">
        <ul class="nav__list">
          <li class="nav__li">
            <a class="nav__link" href="#services-js">Услуги</a>
          </li>

          <li class="nav__li">
            <a class="nav__link" href="#portfolio-js">Портфолио</a>
          </li>
        </ul>
      </div>

      <div class="adress-block footer__central-block">
        <address class="adress">
          <ul>
            <li class="adress__li adress__li_margin">
              <a class="adress__call-number" href="tel:+79620114705">
                <phone-icon class="adress__icon-phone"/>+7 (962) 011-47-05
              </a>
            </li>

            <li class="adress__li">
              <a class="adress__mail" href="mailto:nickeny@yandex.ru">
                <mail-icon class="adress__icon-mail"/>nickeny@yandex.ru
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div class="block-social footer__right-block">
        <a
          href="#"
          id="openModalButtonFooter-js"
          class="btn btn_pink block-social__button"
          :class="darkTheme && 'dark'"
          @click="openModalCallback"
        >Заказать звонок</a>

        <ul class="social block-social__list">
          <li class="social__li social__li_vk">
            <a
              class="social__link social__link_vk"
              href="https://vk.com/ivan_ivan00v"
              aria-label="Я во Вконтакте"
            >
              <vk-icon class="social__icon social__icon_vk"/>
            </a>
          </li>

          <li class="social__li">
            <a
              class="social__link social__link_telegram"
              href="https://t.me/ivn00v"
              aria-label="Я в Telegram"
            >
              <telegram-icon class="social__icon social__icon_telegram"/>
            </a>
          </li>

          <li class="social__li social__li_twitter">
            <a
              class="social__link social__link_github"
              href="https://github.com/IvanSham-front"
              aria-label="Мой профиль на github"
            >
              <github-icon class="social__icon social__icon_github"/>
            </a>
          </li>
          <li class="social__li">
            <a
              class="social__link social__link_linkedin"
              href="https://www.linkedin.com/in/ivan-shamenkov/"
              aria-label="Мой профиль на linkedin"
            >
              <linkedin-icon class="social__icon social__icon_linkedin"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--fixed-container-->

    <p class="rights">&copy; Иван Шаменков, 2020-2023</p>
  </footer>
</template>

<script>
import phoneIcon from "./svg/sprites/phone-icon.vue";
import mailIcon from "./svg/sprites/mail.vue";
import vkIcon from "./svg/sprites/vk-icon.vue";
import telegramIcon from "./svg/sprites/telegram-icon.vue";
import githubIcon from "./svg/sprites/github-icon.vue";
import linkedinIcon from "./svg/sprites/linkedin-icon.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "footer-element",
  components: {
    phoneIcon,
    mailIcon,
    vkIcon,
    telegramIcon,
    githubIcon,
    linkedinIcon
  },
  computed: {
    ...mapGetters(["darkTheme"])
  },
  methods: {
    ...mapActions(["SET_MODAL"]),
    openModalCallback(e) {
      e.preventDefault();
      this.SET_MODAL("callback-modal");
    }
  }
};
</script>
