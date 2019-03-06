<template>
  <main class="movie-shelf" v-touch:swipe.right="swipe">
    <Movies v-for="movie in movies" :key="movie.id" :movie="movie"/>
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
    swipe() {
      this.$store.commit("swipe", 1);
    }
  },
  beforeMount() {
    this.$store.getters.movies;
  }
};
</script>

<style>
</style>
