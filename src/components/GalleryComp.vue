<template>
  <article class="gallery">
    <section class="container">
    <div class="gallery-back" @click="$router.push('/')">&#x2190;</div>
      <section class="gallery-title">
        <h1>Gallery</h1>
      </section>
      <Images />
    </section>
  </article>
</template>

<script>
import Images from './Images'
export default {
  name: 'Gallery',
  props: ['image'],
    components: {
        Images
    },
  computed: {
    images() {
      return this.$store.getters.getImages
    }
  }
  }
</script>

<style lang="scss">

</style>
