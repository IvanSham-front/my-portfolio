<template>
  <div class="container">
    <input
      v-if="type !== 'number'"
      :class="['input', {'active' : isActive}, {'dark': darkTheme}]"
      :type="type"
      :required="required || false"
      :id="id"
      :name="id"
      v-model="value"
      @change="handleInputChange"
    >

    <input
      v-else
      :class="['input', {'active' : isActive}, {'dark': darkTheme}]"
      :type="'text'"
      :required="required || false"
      :id="id"
      :name="id"
      v-model="value"
      @keypress="restrictInput"
      @input="formatPhoneNumber"
      @change="handleInputChange"
    >

    <label class="label" :for="name">{{labelText}}</label>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "custom-input",
  data() {
    return {
      value: ""
    };
  },
  props: {
    labelText: {
      type: String
    },
    type: {
      type: String,
      required: true
    },
    required: {
      type: Boolean
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    handleInputChange(e) {
      this.value = e.target.value;
    },
    restrictInput(event) {
      const allowedChars = /[0-9\+]/; // Регулярное выражение, разрешающее только цифры и символ "+"
      const inputChar = String.fromCharCode(event.keyCode);

      if (!allowedChars.test(inputChar)) {
        event.preventDefault(); // Запрещаем ввод, если символ не соответствует разрешенным
      }
    },
    formatPhoneNumber() {
      let cleanedNumber = this.value.toString().replace(/[^\d]/g, ""); // Очищаем номер от всех символов, кроме цифр
      let formattedNumber = "";
      if (cleanedNumber.startsWith('7')) {
      formattedNumber += '+7 (';
      cleanedNumber = cleanedNumber.slice(1); // Удаляем первую цифру "7" из очищенного номера
    } else if (cleanedNumber.startsWith('8')) {
      formattedNumber += '+7 (';
      cleanedNumber = cleanedNumber.slice(1); // Удаляем первую цифру "8" из очищенного номера
    } else if (!cleanedNumber.startsWith('+7')) {
      formattedNumber += '+7 (';
    }

      if (cleanedNumber.length > 0) {
      formattedNumber += cleanedNumber.substring(0, Math.min(3, cleanedNumber.length));
    }

    if (cleanedNumber.length > 3) {
      formattedNumber += ') ' + cleanedNumber.substring(3, Math.min(6, cleanedNumber.length));
    }

    if (cleanedNumber.length > 6) {
      formattedNumber += '-' + cleanedNumber.substring(6, Math.min(8, cleanedNumber.length));
    }

    if (cleanedNumber.length > 8) {
      formattedNumber += '-' + cleanedNumber.substring(8, Math.min(10, cleanedNumber.length));
    }

      this.value = formattedNumber;
    },
  },
  computed: {
    ...mapGetters(['darkTheme']),
    isActive() {
      return this.value !== "";
    }
  }
};
</script>


<style scoped>
.container {
  display: flex;
  align-items: center;
  width: 100%;
  font-family: "Gilroy", sans-serif;
}

.label {
  position: absolute;
  margin-left: 20px;
  transition: all 0.3s;
  font-size: 15px;
  line-height: 18px;
  color: #bec0c2;
  pointer-events: none;
}


.input {
  border: 1px solid transparent;
  background: #f9f9f9;
  padding: 14px 0 14px 20px;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #273142;
  width: 100%;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  outline: none;
}

.input.dark {
  background: #4c4c4c;
  color: #c1c1c1;
}

.input:focus,
.active {
  border: 1px solid #eef0f1;
  background: white;
}

.input.dark:focus,
.active.dark {
  background: #1f1f1f;
}

.input:focus ~ .label,
.active ~ .label {
  margin-top: -49px;
  padding: 0 6px;
  transform: scale(0.9);
  margin-left: calc(20px * 0.3);
  line-height: 14px;
  background: white;
  height: 5px;
  display: flex;
  align-items: center;
  font-size: 12px
}

.input.dark:focus ~ .label,
.active.dark ~ .label {
  background: #1f1f1f
}

.input[type="number"]::-webkit-outer-spin-button,
.input[type="number"]::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
</style>