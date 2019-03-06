<template>
  <main class="home" v-touch:swipe.left="swipe">
    <Home/>
  </main>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
  name: "home",
  components: {
    Home
  },
  methods: {
    swipe() {
      this.$store.commit("swipe", 1);
    }
  },
  beforeMount() {
    this.$store.dispatch("getMovies");
  }
};
</script>
<style lang="sass">
</style>
