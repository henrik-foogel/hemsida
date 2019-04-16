<template>
  <article class="add-movie-art">
    <section class="container">
    <div class="add-movie-back" @click="$router.push('/movie-shelf')">&#x2190;</div>
      <section class="add-movie-title">
        <h3>Add Movies</h3>
      </section>
      <section class="add-movie-content">
        <h4>Title:</h4>
        <input type="text" class="add-movie-input title" placeholder="title" v-model="movie.title">
        <h4>Director:</h4>
        <input type="text" class="add-movie-input director" placeholder="director" v-model="movie.director">
        <h4>Cast:</h4>
        <div class="add-movie-cast"><input type="text" class="cast" placeholder="name" v-model="cast1"><input type="text" class="cast" placeholder="name" v-model="cast2"><input type="text" class="cast" placeholder="name" v-model="cast3"></div>
        <h4>Music:</h4>
        <input type="text" class="add-movie-input music" placeholder="music" v-model="movie.music">
        <h4>Year:</h4>
        <input type="number" class="add-movie-input year" placeholder="year" v-model.number="movie.year">
        <h4>Genre:</h4>
        <select v-model="movie.genre" class="add-movie-input genre">
            <option v-for="(genre, index) in genres" :key="index">{{ genre }}</option>
        </select>
        <h4>Secondary Genre:</h4>
        <select v-model="movie.secondgenre" class="add-movie-input genre">
            <option v-for="(genre, index) in genres" :key="index">{{ genre }}</option>
        </select>
        <h4>Rating:</h4>
        <select class="add-movie-input rating" v-model.number="movie.rating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
        </select>
        <h4>Shelf:</h4>
        <select v-model="movie.shelf" class="add-movie-input shelf">
            <option v-for="shelf in shelfs" :key="shelf">{{ shelf }}</option>
        </select>
        <h4>Format:</h4>
        <select v-model="movie.version.format" class="add-movie-input format">
            <option v-for="(form, index) in format" :key="index+form">{{ form }}</option>
        </select>
        <h4>Edition:</h4>
        <select v-model="movie.version.edition" class="add-movie-input edition">
            <option v-for="(ed, index) in edition" :key="index+ed">{{ ed }}</option>
        </select>
        <h4>Number of Discs:</h4>
        <input type="number" class="add-movie-input discs" v-model="movie.version.discs">

        <div class="add-movie-btn" @click="storeMovie">Add Movie</div>
      </section>
    </section>
  </article>
</template>

<script>
import {db} from '../firebase-config'
export default {
  name: "add-movie",
  data() {
      return {
          cast1: '',
          cast2: '',
          cast3: '',
          movie: {
              title: '',
              director: [],
              music: [],
              year: '',
              genre: '',
              secondgenre: '',
              rating: '',
              shelf: '',
              id: '',
              version: {
                format: '',
                edition: '',
                discs: ''
              }
          }
      }
  },
  methods: {
    async storeMovie() {
      let director = []
      let cast = []
      let music = []
      director.push(this.movie.director)
      cast.push(this.cast1)
      cast.push(this.cast2)
      cast.push(this.cast3)
      music.push(this.movie.music)
      await db.collection('movies').add({
        title: this.movie.title,
        director: director,
        cast: cast,
        music: music,
        genre: this.movie.genre,
        secondgenre: this.movie.secondgenre,
        year: this.movie.year,
        rating: this.movie.rating,
        shelf: this.movie.shelf,
        version: this.movie.version,
        id: this.$store.state.movies.length
      })
      this.$router.push('/movie-shelf')
    }
  },
  computed: {
      genres() {
          return this.$store.getters.getGenresToAdd
      },
      shelfs() {
          return this.$store.getters.getShelfs
      },
      format() {
        return this.$store.getters.getFormat;
      },
      edition() {
        return this.$store.getters.getEdition;
      }
  }
};
</script>

<style>
</style>
