<template>
  <div class="modal-widget" v-if="modal">
    <div class="modal-overlay" @click="close"></div>
    <component :is="modal" class="modal-container" :class="darkTheme && 'dark'" @close="close"></component>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import exampleModal from "./example-modal/example-modal.vue";
import callbackModal from "./callback-modal/callback-modal.vue";

export default {
  name: "modal-widget",
  components: {
    exampleModal,
    callbackModal
  },
  computed: {
    ...mapGetters(["modal", "darkTheme"])
  },
  watch: {
    modal() {
      const body = document.querySelector("html");
      if (this.modal) {
        body.style.overflow = "hidden";
        body.style.paddingRight = this.scrollWidth() + "px";
      } else {
        body.style.overflow = "auto";
        body.style.paddingRight = "0";
      }
    }
  },
  methods: {
    ...mapActions(["SET_CURRENT_EXAMPLE", "SET_MODAL"]),
    close(e) {
      e.stopPropagation();
      const overlay = document.querySelector(".modal-overlay");
      const container = document.querySelector(".modal-container");
      overlay.classList.add("close");
      container.classList.add("close");
      setTimeout(() => {
        overlay.classList.remove("close");
        container.classList.remove("close");
        this.SET_MODAL("");
      }, 300);
    },
    scrollWidth() {
      const div = document.createElement("div");
      div.style.overflowY = "scroll";
      div.style.width = "50px";
      div.style.height = "50px";
      document.body.append(div);
      const scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();
      return scrollWidth;
    }
  }
};
</script>