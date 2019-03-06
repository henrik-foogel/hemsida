<template>
  <article class="movie">
      <section class="container">
          <section class="selected-movie-title">
              {{ movie }}
          </section>
      </section>
  </article>
</template>

<script>
export default {
  name: "movie",
  computed: {
    movie() {
      return this.$store.getters.movies[this.$store.state.movieId];
    }
  }
};
</script>

<style lang="scss">
</style>

