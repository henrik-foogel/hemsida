<template>
  <div id="app">
    <section class="slider" :class="'slide-' + activeSlide">
      <Home @swipe="handleSwipe"  />
      <Gallery @swipe="handleSwipe"  />
    </section>
  </div>
</template>

<script>
import Home from './views/Home'
import Gallery from './views/Gallery'
export default {
  name: 'app', 
  computed: {
    activeSlide(){
      return this.$store.state.activeSlide;
    }
  },
  components: {
    Home,
    Gallery
  },
  methods: {
    handleSwipe(e) {
      this.activeSlide = e
    }
  }

}
</script>

<style lang="sass">
  @import './scss/main.scss';
</style>
