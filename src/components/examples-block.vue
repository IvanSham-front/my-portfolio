<template>
  <div class="examples-block" :class="darkTheme && 'dark'">
    <section class="page-section fixed-container examples-block__section">
      <h2 class="title page-section__title examples-block__title" id="portfolio-js">Примеры моих работ</h2>
      <div class="examples">
        <ul class="examples__list">
          <li class="examples__item" v-for="(example, index) in examples" :key="index">
  
            <figure
              :class="['example', {'example_open': example.visible}]"
              :id="example.id"
              ref="example"
              @click="openAboutExample(example)"
            >
              <figcaption class="example__title" v-if="example.visible">{{ example.title }}</figcaption>
              <img :src="example.photos[0].desktop" class="example__img">
            </figure>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import examples from "../source/examples";

export default {
  name: "examples-block",
  data() {
    return {
      examples
    };
  },
  methods: {
    ...mapActions(["SET_CURRENT_EXAMPLE", "SET_MODAL"]),
    openExample(id) {
      const index = this.examples.findIndex(item => item.id === id);
      this.examples[index].visible = true;
    },
    onElementObserved(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.openExample(entry.target.id);
        }
      });
    },
    openAboutExample(example) {
      this.SET_CURRENT_EXAMPLE(example);
      this.SET_MODAL("example-modal");
    }
  },
  computed: {
    ...mapGetters(['darkTheme'])
  },
  mounted() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: null,
      threshold: 0.8
    });
    setTimeout(() => {
      this.$refs.example.map(ref => {
        this.observer.observe(ref);
      });
    }, 500);
  }
};
</script>
