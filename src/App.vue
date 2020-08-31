<template>
  <div id="app">
    <section class="slider" :class="'slide-' + activeSlide">
      <router-view />
    </section>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    activeSlide() {
      return this.$store.state.activeSlide;
    },
  },
  components: {},
};
</script>

<style lang="sass">
@import './scss/main.scss';
</style>
