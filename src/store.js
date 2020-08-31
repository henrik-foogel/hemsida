import Vue from "vue";
import Vuex from "vuex";
import ImageJson from "@/json/images";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeSlide: 0,
    movies: [],
    images: ImageJson,
  },
  mutations: {
    swipe(state, activeSlide) {
      state.activeSlide = activeSlide;
    },
  },
  actions: {
  },
  getters: {
  }
});
