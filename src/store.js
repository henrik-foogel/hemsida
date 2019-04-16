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
    chosenMovie: {'title': 'test', 'director': ['test'], 'cast': ['1', '2', '3'], 'music': ['test'], 'year': 1900, 'genre': 'test', 'secondgenre': 'test', 'rating': 1, 'shelf': 'test', 'id': 1, 'version': [{'format': 'test'}, {'edition': 'test'}, {'discs': 1}]},
    genres: ['All', 'Action', 'Adventure', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi', 'Western', 'Crime'],
    genresToAdd: ['Action', 'Adventure', 'Animation', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi', 'Western', 'Crime'],
    shelfs: ['Classic Action Stars', 'Bruce Campbell', 'John Carpenter', 'Action', 'Drama', 'Fantasy', 'Comedy', 'Sci-Fi', 'Horror/Thriller', 'Musical', 'Animation', 'Western', 'Documentary', 'Music', 'Boxes', 'Steelbooks', 'Special'],
    shelfsSearch: ['All', 'Classic Action Stars', 'Bruce Campbell', 'John Carpenter', 'Action', 'Drama', 'Fantasy', 'Comedy', 'Sci-Fi', 'Horror/Thriller', 'Musical', 'Animation', 'Western', 'Documentary', 'Music', 'Boxes', 'Steelbooks', 'Special'],
    chosenSearchCriteria: 'Movies',
    search: '',
    format: ['Blu-ray', 'DVD', 'Blu-ray/DVD', 'VHS'],
    edition: ["Regular", "Collector's", "Special", "Collection", "Steelbook", "Limited", "Limited Collection"]
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
    getShelfsSearch(state) {
      return state.shelfsSearch
    },
    getMovieId(state) {
      return state.movieId
    },
    getImages(state) {
      return JSON.stringify(state.images)
    },
    getChosenSearchCriteria(state) {
      return state.chosenSearchCriteria;
    },
    getSearch(state) {
      return state.search;
    },
    getFormat(state) {
      return state.format;
    },
    getEdition(state) {
      return state.edition;
    }
  }
});
