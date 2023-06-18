<template>
  <div class="callback-modal">
    <h2 class="title callback-modal__title">Заказать обратный звонок</h2>
    <form class="callback-form callback-modal__form">
      <custom-input 
        :id="'name'" 
        :labelText="'Ваше имя'" 
        :type="'text'" 
        :required="true"
      />

      <custom-input 
        :id="'email'" 
        :labelText="'Электронная почта'" 
        :type="'email'" 
        :required="true"
      />

      <custom-input
        :id="'phone'"
        :labelText="'Номер телефона'"
        type="number"
        :required="true"
      />

      <custom-textarea 
        :labelText="'Введите описание'"
        :id="'description'"
      />
      <button type="submit" class="btn callback-form__button">Отправить</button>
    </form>
  </div>
</template>

<script>
import customInput from "../../ui-components/custom-input/custom-input.vue";
import customTextarea from "../../ui-components/custom-textarea/custom-textarea.vue";

export default {
  name: "callback-modal",
  components: {
    customInput, customTextarea
  }
};
</script>