<template>
<main class="gallery" v-touch:swipe.right="swipe" v-touch:swipe.left="swipeLeft">
  <Gallery v-for="(image, index) in images" :key="index" :image="image" />
</main>
</template>
<script>
import Gallery from '../components/GalleryComp'
export default {
  name: 'gallery',
  components: {
    Gallery
  },
  computed: {
    images() {
      return this.$store.state.images;
    }
  },
  methods: {
    swipe(){
      this.$store.commit('swipe', 0);
    },
    swipeLeft(){
      this.$store.commit('swipe', 2);
    }
  }
}
</script>

<style lang="sass">
</style>