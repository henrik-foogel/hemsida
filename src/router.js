import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/gallery",
      component: () => import("./views/Gallery.vue")
    },
    {
      path: "/movie-shelf",
      component: () => import("./views/MovieShelf.vue")
    },
    {
      path: "/movie",
      component: () => import("./views/Movie.vue")
    },
    {
      path: "/add-movie",
      component: () => import("./views/AddMovie.vue")
    },
    {
      path: "/movie-shelf",
      component: () => import("./views/MovieShelf.vue")
    }
  ]
});