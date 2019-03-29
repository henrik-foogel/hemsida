import Vue from "vue";
import Vuex from "vuex";
import ImageJson from "@/json/images";
import {fb, db} from './firebase-config'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeSlide: 0,
    movies: [],
    images: ImageJson,
    chosenMovie: {'title': 'test', 'director': ['test'], 'cast': ['1', '2', '3'], 'music': ['test'], 'year': 1900, 'genre': 'test', 'secondgenre': 'test', 'rating': 1, 'shelf': 'test', 'id': 1},
    genres: ['All', 'Action', 'Adventure', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi', 'Western'],
    genresToAdd: ['Action', 'Adventure', 'Animation', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi', 'Western'],
    shelfs: ['Classic Action Stars', 'Bruce Campbell', 'John Carpenter', 'Action', 'Drama', 'Fantasy', 'Comedy', 'Sci-Fi', 'Horror/Thriller', 'Musical', 'Animation', 'Western', 'Documentary', 'Music', 'Boxes', 'Steelbooks', 'Special']
  },
  mutations: {
    swipe(state, activeSlide) {
      state.activeSlide = activeSlide;
    },
    setMovies(state, movies) {
      state.movies = movies
    },
    setChosenMovie(state, movie) {
      state.chosenMovie = movie
    }
  },
  actions: {
    async getMovies(ctx) {
      let movies = await db.collection('movies').get();
      let respArr = [];
      movies.forEach(doc => {
        respArr.push(doc.data())
     })
      ctx.commit('setMovies', respArr)
    }
  },
  getters: {
    movies(state) {
      return state.movies
    },
    getChosenMovie(state) {
      return state.chosenMovie
    },
    getGenres(state) {
      return state.genres
    },
    getGenresToAdd(state) {
      return state.genresToAdd
    },
    getShelfs(state) {
      return state.shelfs
    },
    getMovieId(state) {
      return state.movieId
    },
    getImages(state) {
      return JSON.stringify(state.images)
    }
  }
});
