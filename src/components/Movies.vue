<template>
  <article class="movies">
    <section class="container">
    <div class="movies-back" @click="$router.push('/')">&#x2190;</div>
    <div class="movie-add-movie" @click="$router.push('/add-movie')">Add movie</div>
      <section class="movie-shelf-title">
        <h1>My Movie Collection</h1>
      </section>
      <section class="movie-search">
        <span
          class="fa fa-search"></span>
        <input type="text" v-model="search" placeholder="search movies">
        <span class="fa fa-times" @click="search = ''"></span>
        <select class="movie-search-criteria" v-model="chosenSearchCriteria">
            <option v-for="(search, index) in searchCriteria" :key="index">{{ search }}</option>
        </select>
      </section>
      <div class="dropdown-container">
      <section class="dropdown" @click="showDropDown = !showDropDown, drop = 'genre'">
        Genres
      </section>
      <section class="dropdown" @click="showDropDown = !showDropDown, drop = 'shelf'">
        Shelfs
      </section>
      </div>
        <label class="genres" v-show="showDropDown && drop == 'genre'" v-for="genre in genres" @click="genreFilterOnOff(genre)" :key="genre"><input type="radio"/>{{ genre }}</label>
        <label class="genres" v-show="showDropDown && drop == 'shelf'" v-for="shelf in shelfs" @click="shelfFilterOnOff(shelf)" :key="(shelf+'shelf')"><input type="radio"/>{{ shelf }}</label>
      <div class="movie-title" v-for="movie in filteredMovies" :key="movie.id" @click="chosenMovie(movie)" ><span style="">{{ movie.title }}</span> (<span class="movie-version">{{ movie.version.format }}</span>, <span class="movie-version edition">{{ movie.version.edition }}</span>)</div>
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
      showDropDown: false,
      drop: '',
      showByGenre: false,
      showByShelf: false,
      chosenGenre: '',
      chosenShelf: '',
      searchCriteria: ['Movies', 'Cast', 'Director', 'Music'],
      chosenSearchCriteria: 'Movies'
    };
  },
  computed: {
    movies() {
      return this.$store.getters.movies.slice(0).sort((a,b) => a.title < b.title ? this.sorting : -this.sorting);
    },
    filteredMovies: function() {
      if(this.chosenSearchCriteria == 'Movies') {
        return this.movies.filter((movie) => {
          return movie.title.toLowerCase().includes(this.search.toLowerCase());
        });
      } else if(this.chosenSearchCriteria == 'Shelf') {
        return this.movies.filter((movie) => {
          return movie.shelf.includes(this.chosenShelf);
        });
      } else if(this.chosenSearchCriteria == 'Genre') {
        return this.movies.filter((movie) => {
          return movie.genre.includes(this.chosenGenre) || movie.secondgenre.includes(this.chosenGenre);
        });
      } else if (this.chosenSearchCriteria == 'Cast') {
        return this.movies.filter((movie) => {
          return movie.cast[0].toLowerCase().includes(this.search.toLowerCase()) || movie.cast[1].toLowerCase().includes(this.search.toLowerCase()) || movie.cast[2].toLowerCase().includes(this.search.toLowerCase());
        });
      } else if(this.chosenSearchCriteria == 'Director') {
        var two = 0;
        var three = 0;
        return this.movies.filter((movie) => {
          if(movie.director[-1] == 1) {
          two = 1;
        } else if(movie.director[-1] == 2) {
          two = 1;
          three = 2; 
        }
          return movie.director[0].toLowerCase().includes(this.search.toLowerCase()) || movie.director[two].toLowerCase().includes(this.search.toLowerCase()) || movie.director[three].toLowerCase().includes(this.search.toLowerCase());
        });
      } else if(this.chosenSearchCriteria == 'Music') {
        var two = 0;
        var three = 0;
        return this.movies.filter((movie) => {
          if(movie.director[-1] == 1) {
          two = 1;
        } else if(movie.director[-1] == 2) {
          two = 1;
          three = 2; 
        }
          return movie.music[0].toLowerCase().includes(this.search.toLowerCase()) || movie.music[two].toLowerCase().includes(this.search.toLowerCase()) || movie.music[three].toLowerCase().includes(this.search.toLowerCase());
        });
      } 
     },
    genres() {
      return this.$store.getters.getGenres
    },
    shelfs() {
      return this.$store.getters.getShelfsSearch
    }
  },
  methods: {
    chosenMovie(movie) {
      this.$store.commit("setChosenMovie", movie);
      this.$router.push('/movie');
  },
  shelfFilterOnOff(shelf) {
    this.chosenShelf = shelf
      this.showDropDown = false
      if(this.chosenShelf == 'All') {
        this.chosenSearchCriteria = 'Movies'
        this.showByShelf = false
        this.showByGenre = false
      } else {
        this.chosenSearchCriteria = 'Shelf'
        this.showByShelf = true
        this.showByGenre = false
      }
    },
    genreFilterOnOff(genre) {
      this.chosenGenre = genre
        this.showDropDown = false
        if(this.chosenGenre == 'All') {
          this.chosenSearchCriteria = 'Movies'
          this.showByGenre = false
          this.showByShelf = false
        } else {
          this.chosenSearchCriteria = 'Genre'
          this.showByGenre = true
          this.showByShelf = false
        }
      }
  },
  beforeMount() {
    this.$store.dispatch('getMovies');
    this.search = this.$store.state.search;
    this.chosenSearchCriteria = this.$store.state.chosenSearchCriteria;
  }
};
</script>

<style lang="scss">
</style>
 