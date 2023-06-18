<template>
  <div class="container">
    <textarea
      :class="['textarea', {'active' : isActive}, {'dark' : darkTheme}]"
      @change="handleTextAreaChange"
      :id="id"
      :name="id"
      v-model="value"
    ></textarea>

    <label class='label' :for="id">{{ labelText }}</label>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "custom-textarea",
  data() {
    return {
      value: ""
    };
  },
  props: {
    labelText: {
      type: String
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(["darkTheme"]),
    isActive() {
      return this.value !== "";
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  position: relative;
}
.textarea {
  height: 132px;
  background: #f9f9f9;
  border: 0;
  box-sizing: border-box;
  border-radius: 15px;
  resize: none;
  width: 100%;
  outline: none;
  padding: 14px 20px;
}

.textarea.dark {
  background: #4c4c4c;
  color: #c1c1c1;
}


.textarea:focus, .textarea.active {
  background: #ffffff;
  border: 1px solid #eef0f1;
}

.textarea.dark:focus, .textarea.active.dark {
  background: #1f1f1f;
}


.label {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  color: #bec0c2;
  position: absolute;
  top: 15px;
  left: 20px;
  padding: 0;
  transition: 0.3s ease;
}

.textarea:focus + .label,
.textarea.active + .label {
  background: white;
  top: -7px;
  left: 10px;
  height: 11px;
  display: flex;
  padding: 0 6px;
}

.textarea.dark:focus + .label,
.textarea.active.dark + .label {
  background: #1f1f1f

}

</style>