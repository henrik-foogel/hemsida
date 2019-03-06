<template>
  <article class="movies">
    <section class="container">
      <section class="movie-shelf-title">
        <h1>My Movie Shelf</h1>
      </section>
        <div v-for="movie in movies" :key="movie.id" @click="chosenMovie(movie.id)" class="movie-title">{{ movie.name }}</div>
    </section>
  </article>
</template>

<script>
export default {
  name: "movies",
  // props: ['movie'],
  computed: {
    movies() {
      return this.$store.getters.movies
    }
  },
  methods: {
    chosenMovie(id) {
      console.log(id)
      this.$store.commit('setMovieId', id);
      this.$store.commit("swipe", 3);
    }
  }
};
</script>

<style lang="scss">
</style>
 