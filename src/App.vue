<template>
  <div id="app">
    <section class="slider" :class="'slide-' + activeSlide">
      <router-view/>
    </section>
  </div>
</template>

<script>
import Home from './views/Home'
import Gallery from './views/Gallery'
import MovieShelf from './views/MovieShelf'
import Movie from './views/Movie'
import AddMovie from './views/AddMovie'
export default {
  name: 'app', 
  computed: {
    activeSlide(){
      return this.$store.state.activeSlide;
    }
  },
  components: {
    Home,
    Gallery,
    MovieShelf,
    Movie,
    AddMovie
  },
  beforeMount() {
    this.$store.dispatch('getMovies');
  }

}
</script>

<style lang="sass">
  @import './scss/main.scss';
</style>
