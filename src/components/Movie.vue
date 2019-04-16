<template>
  <article class="movie">
    <section class="container">
    <div class="selected-movie-back" @click="back()">&#x2190;</div>
      <section class="selected-movie">
          <div><span class="selected-movie-text">Title: </span>
          <span class="selected-movie-chosen">{{ selectedMovie.title }}</span></div>
          <div><span class="selected-movie-text">Director: </span>
          <span class="selected-movie-chosen color"><span v-for="(director, index) in selectedMovie.director" :key="director+index" class="selected-movie-filter" @click="filterPerson(director, 'Director')">{{ director }}</span></span></div>
          <div><span class="selected-movie-text">Cast: </span>
          <span class="selected-movie-chosen color"><span v-for="(cast, index) in selectedMovie.cast" :key="cast+index" class="selected-movie-filter" @click="filterPerson(cast, 'Cast')">{{ cast }} </span></span></div>
          <div><span class="selected-movie-text">Music: </span>
          <span class="selected-movie-chosen"><span v-for="(music, index) in selectedMovie.music" :key="music+index" class="selected-movie-filter" @click="filterPerson(music, 'Music')">{{ music }}</span></span></div>
          <div><span class="selected-movie-text">Year: </span>
          <span class="selected-movie-chosen"><span>{{ selectedMovie.year }}</span></span></div>
          <div><span class="selected-movie-text">Genre: </span>
          <span class="selected-movie-chosen">{{ selectedMovie.genre }} / {{ selectedMovie.secondgenre }}</span></div>
          <div><span class="selected-movie-text">Rating: </span>
          <span class="selected-movie-chosen">{{ selectedMovie.rating }}</span></div>
          <div><span class="selected-movie-text">Shelf: </span>
          <span class="selected-movie-chosen">{{ selectedMovie.shelf }}</span></div>
          <div><span class="selected-movie-text">Format: </span>
          <span class="selected-movie-chosen">{{ selectedMovie.version.format }}</span></div>
          <div><span class="selected-movie-text">Edition: </span>
          <span class="selected-movie-chosen">{{ selectedMovie.version.edition }}</span></div>
          <div><span class="selected-movie-text">Discs: </span>
          <span class="selected-movie-chosen">{{ selectedMovie.version.discs }}</span></div>
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
    },
    filterPerson(person, criteria) {
      this.$store.state.search = person;
      this.$store.state.chosenSearchCriteria = criteria;
      this.$router.push('/movie-shelf')
    },
    back() {
      this.$store.state.search = ''; 
      this.$router.push('/movie-shelf');
    }
  },
  beforeMount() {
    console.log(this.$store.getters.getChosenMovie.title)
  }
};
</script>

<style lang="scss">
</style>

