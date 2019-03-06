import Vue from "vue";
import Vuex from "vuex";
import ImageJson from "@/json/images";
import {fb, db} from './firebase-config'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeSlide: 0,
    images: ImageJson,
    movies: '',
    movieId: 1
  },
  mutations: {
    swipe(state, activeSlide) {
      state.activeSlide = activeSlide;
    },
    setMovies(state, movies) {
      state.movies = movies
    },
    setMovieId(state, id) {
      state.movieId = id
    }
  },
  actions: {
    async getMovies(ctx) {
      await db.ref('movies').once('value', snap => { 
        ctx.commit('setMovies', snap.val())
      });
    }
  },
  getters: {
    movies(state) {
      return state.movies
    },
    getMovieById(state) {
      console.log(state.movieId)
      return (id) => {
        return state.movies.filter(movie => movie.id == id)
      }
    }
  }
});
