<template>
  <article class="movies">
    <section class="container">
    <div class="movies-back" @click="$router.push('/')">&#x2190;</div>
    <div class="movie-add-movie" @click="$router.push('/add-movie')">Add movie</div>
      <section class="movie-shelf-title">
        <h1>My Movies</h1>
      </section>
      <section class="movie-search">
        <span
          class="fa fa-search"
          style="top: 2rem; left: 0.7rem; float: left; color: rgba(255, 255, 255, 0.2);"
        ></span>
        <input type="text" v-model="search" placeholder="search movies">
      </section>
      <section class="dropdown" @click="showDropdownGenres = !showDropdownGenres">
        Genres
      </section>
        <label class="genres" v-show="showDropdownGenres" v-for="genre in genres" @click="genreFilterOnOff(genre)" :key="genre"><input type="radio"/>{{ genre }}</label>
      <div class="movie-title" v-for="movie in filteredMovies" :key="movie.id" v-show="!showByGenre" @click="chosenMovie(movie)" >{{ movie.title }}</div>
      <div class="movie-title" v-for="movie in filteredMovies" v-if="!chosenGenre || movie.genre == chosenGenre || movie.secondgenre == chosenGenre" :key="movie.title" v-show="showByGenre" @click="chosenMovie(movie)" >{{ movie.title }}</div>
      
    </section>
  </article>
</template>

<script>
export default {
  name: "movies",
  data() {
    return {
      search: '',
      sorting: -1,
      showDropdownGenres: false,
      showByGenre: false,
      chosenGenre: ''
    };
  },
  computed: {
    movies() {
      return this.$store.getters.movies.slice(0).sort((a,b) => a.title < b.title ? this.sorting : -this.sorting);
    },
    filteredMovies: function() {
        return this.movies.filter((movie) => {
          return movie.title.toLowerCase().includes(this.search.toLowerCase());
        });
     },
    genres() {
      return this.$store.getters.getGenres
    }
  },
  methods: {
    chosenMovie(movie) {
      this.$store.commit("setChosenMovie", movie);
      this.$router.push('/movie');
  },
  genreFilterOnOff(genre) {
    console.log(this.chosenGenre)
    this.chosenGenre = genre
      this.showDropdownGenres = false
      if(this.chosenGenre == 'All') {
        this.showByGenre = false
      } else {
        this.showByGenre = true
      }
    }
  }
};
</script>

<style lang="scss">
</style>
 