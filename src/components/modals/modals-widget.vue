<template>
  <div class="modal-widget" v-if="modal" >
    <div class="modal-overlay" @click="close"></div>
    <component :is="modal" class="modal-container"></component>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import exampleModal from "./example-modal/example-modal.vue";

export default {
  name: "modal-widget",
  components: {
    exampleModal
  },
  computed: {
    ...mapGetters(["modal"])
  },
  methods: {
    ...mapActions(["SET_CURRENT_EXAMPLE", "SET_MODAL"]),

    close(e) {
      e.stopPropagation()
      this.SET_MODAL("");
    }
  }
};
</script>