<template>
  <div class="callback-modal">
    <h2 class="title callback-modal__title" v-if="!sendStatus">Заказать обратный звонок</h2>
    <form v-if="!sendStatus" @submit="submitForm" class="callback-form callback-modal__form">
      <custom-input :id="'name'" :labelText="'Ваше имя'" :type="'text'" :required="true"/>

      <custom-input
        :id="'email'"
        :labelText="'Электронная почта'"
        :type="'email'"
        :required="true"
      />

      <custom-input :id="'phone'" :labelText="'Номер телефона'" type="number" :required="true"/>

      <custom-textarea :labelText="'Введите описание'" :id="'description'"/>
      <button type="submit" class="btn callback-form__button">Отправить</button>
    </form>

    <p class="callback-modal__text" v-if="sendStatus === 'success'">
      Благодарю вас за отправку запроса на обратный звонок.
      Я свяжусь с вами в ближайшее время.
      <br>С уважением,
      <br>Шаменков Иван
    </p>

    <p class="callback-modal__text" v-if="sendStatus === 'error'">
      Произошла неизвестная ошибка<br>
      Повторите позже или попробуйте альтернативный способ связи.
    </p>
  </div>
</template>

<script>
import customInput from "../../ui-components/custom-input/custom-input.vue";
import customTextarea from "../../ui-components/custom-textarea/custom-textarea.vue";
import { mapActions } from "vuex";

export default {
  name: "callback-modal",
  components: {
    customInput,
    customTextarea
  },
  data() {
    return {
      sendStatus: ""
    };
  },
  methods: {
    ...mapActions(["SET_MODAL"]),
    submitForm(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      fetch("/send_mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: formData
      })
        .then(response => {
          if (response.ok) {
            this.sendStatus = "success";
          } else {
            this.sendStatus = "error";
          }
          console.log(response)
          setTimeout(() => {
            this.$emit("close", e);
          }, 5000);
        })
        .catch(error => {
          console.log(error);
          this.sendStatus = "error";
          setTimeout(() => {
            this.$emit("close", e);
          }, 5000);
        });
    }
  }
};
</script>