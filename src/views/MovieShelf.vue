<template>
  <main class="movie-shelf" >
    <Movies/>
  </main>
</template>

<script>
import Movies from "@/components/Movies";

export default {
  name: "movies",
  components: {
    Movies
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    }
  },
  methods: {
    swipeRight() {
      this.$store.commit("swipe", 1);
    },
    swipeLeft() {
      this.$store.commit("swipe", 4);
    }
  }
};
</script>

<style>
</style>
