import Vue from "vue";
import Vuex from "vuex";
//import ImageJson from "@/json/images";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeSlide: 0,
    images: [
      {
        file: "../assets/gallery/1.jpg"
      },
      {
        file: "../assets/gallery/2.jpg"
      },
      {
        file: "../assets/gallery/3.jpg"
      },
      {
        file: "../assets/gallery/4.jpg"
      },
      {
        file: "../assets/gallery/5.jpg"
      },
      {
        file: "../assets/gallery/6.jpg"
      },
      {
        file: "../assets/gallery/7.jpg"
      },
      {
        file: "../assets/gallery/8.jpg"
      },
      {
        file: "../assets/gallery/9.jpg"
      },
      {
        file: "../assets/gallery/10.jpg"
      }
    ]
  },
  mutations: {
    swipe(state, activeSlide) {
      state.activeSlide = activeSlide;
    }
  },
  actions: {}
});
