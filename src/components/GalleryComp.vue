<template>
  <article class="gallery">
    <section class="container">
      <section class="gallery-title">
        <h1>Gallery</h1>
      </section>
      <section class="gallery-content">
        <img class="gallery-image" v-for="(image, index) in images" :key="index" :src="image" />
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Gallery',
  props: ['image'],
  computed: {
    images() {
      return this.$store.state.images
    }
  }
  }
</script>

<style lang="scss">

</style>
