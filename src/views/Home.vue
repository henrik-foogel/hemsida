<template>
  <main class="home">
    <Home />
  </main>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
  name: "home",
  components: {
    Home,
  },
  methods: {
    swipe() {
      this.$store.commit("swipe", 1);
    },
  },
};
</script>
<style lang="sass"></style>
