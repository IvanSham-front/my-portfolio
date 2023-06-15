<template>
  <footer class="footer">
    <div class="fixed-container footer__inner">
      <div class="nav">
        <ul class="nav__list">
          <li class="nav__li">
            <a class="nav__link" href="#services-js">Услуги</a>
          </li>

          <li class="nav__li">
            <a class="nav__link" href="#portfolio-js">Портфолио</a>
          </li>

          <li class="nav__li">
            <a class="nav__link" href="#cost-js">Стоимость</a>
          </li>
        </ul>
      </div>

      <div class="adress-block footer__central-block">
        <address class="adress">
          <ul>
            <li class="adress__li adress__li_margin">
              <a class="adress__call-number" href="tel:+79620114705">
                <svg class="adress__icon-phone">
                  <use xlink:href="../assets/img/sprite.svg#phone"></use>
                </svg>
                +79620114705
              </a>
            </li>

            <li class="adress__li">
              <a class="adress__mail" href="mailto:nickeny@yandex.ru">
                <svg class="adress__icon-mail">
                  <use xlink:href="../assets/img/sprite.svg#mail"></use>
                </svg>
                nickeny@yandex.ru
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
        >Заказать звонок</a>

        <ul class="social block-social__list">
          <li class="social__li social__li_vk">
            <a class="social__link social__link_vk" href="#" aria-label="Я во Вконтакте">
              <svg class="social__icon social__icon_vk">
                <use xlink:href="../assets/img/sprite.svg#vk-icon"></use>
              </svg>
            </a>
          </li>

          <li class="social__li">
            <a class="social__link social__link_facebook" href="#" aria-label="Я в Facebook">
              <svg class="social__icon social__icon_facebook">
                <use xlink:href="../assets/img/sprite.svg#facebook-icon"></use>
              </svg>
            </a>
          </li>

          <li class="social__li social__li_twitter">
            <a class="social__link social__link_twitter" href="#" aria-label="Я в TWitter">
              <svg class="social__icon social__icon_twitter">
                <use xlink:href="../assets/img/sprite.svg#twitter-icon"></use>
              </svg>
            </a>
          </li>

          <li class="social__li">
            <a class="social__link social__link_instagram" href="#" aria-label="Я в Instagram">
              <svg class="social__icon social__icon_instagram">
                <use xlink:href="../assets/img/sprite.svg#instagram-icon"></use>
              </svg>
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
export default {
  name: "footer-element"
};
</script>
