<template>
<main class="add-movie">
    <AddMovie />
</main>
</template>

<script>
import AddMovie from '../components/AddMovie'
export default {
    name: 'add-movie',
    components: {
        AddMovie
    },
  methods: {
    swipe() {
      this.$store.commit("swipe", 2);
    }
  }
}
</script>

<style>

</style>
