<template>
  <article class="gallery">
    <section class="container">
      <section class="gallery-title">
        <h1>Gallery</h1>
      </section>
      <article class="gallery-content">
        <section class="gallery">{{ image }}</section>
      </article>
    </section>
  </article>
</template>

<script>
export default {
 name: 'Gallery',
 props: ['image']
}
</script>

<style lang="scss">

</style>
