<template>
  <article class="movie">
    <section class="container">
    <div class="selected-movie-back" @click="$router.push('/movie-shelf')">&#x2190;</div>
      <section class="selected-movie">
          <div>Title:<br><span>{{ selectedMovie.title }}</span></div>
          <div>Director:<br><span>{{ selectedMovie.director.toString() }}</span></div>
          <div>Cast:<br><span>{{ selectedMovie.cast.toString() }}</span></div>
          <div>Music:<br><span>{{ selectedMovie.music.toString() }}</span></div>
          <div>Year:<br><span>{{ selectedMovie.year }}</span></div>
          <div>Genre:<br><span>{{ selectedMovie.genre }} / {{ selectedMovie.secondgenre }}</span></div>
          <div>Rating:<br><span>{{ selectedMovie.rating }}</span></div>
          <div>Shelf:<br><span>{{ selectedMovie.shelf }}</span></div>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: "movie",
  computed: {
    selectedMovie: function() {
      console.log(this.$store.getters.getChosenMovie)
      return this.$store.getters.getChosenMovie
    }
      },
  methods: {
    swipe() {
      this.$store.commit("swipe", 2);
    }
  },
  beforeMount() {
    console.log(this.$store.getters.getChosenMovie.title)
  }
};
</script>

<style lang="scss">
</style>

