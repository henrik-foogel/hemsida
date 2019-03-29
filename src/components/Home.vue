<template>
  <article class="home">
    <section class="container">
      <section class="home-title">
        <h1>Henrik Foogel</h1>
        <p>- Frontend developer student -</p>
      </section>
      <section class="home-content">
        <img src="../assets/jag.jpg" alt="">
        <div class="home-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perferendis soluta pariatur alias repudiandae id, repellendus voluptatibus quidem asperiores aliquid delectus ab architecto optio dolorem accusantium deleniti tempora. Cum, laboriosam?
        </div>
        <div class="home-open-projects-menu-btn">Links to my stuff</div>
        <section class="home-project-buttons">
          <div class="home-project-movies-btn" @click="$router.push('/movie-shelf')">Movie Gallery</div>
          <div class="home-project-movies-btn" @click="$router.push('/gallery')">Gallery</div>
        </section>
      </section>
      <footer class="home-footer">
        <div class="home-footer-contact"><a href="mailto: henrik.foogel@gmail.com" class="home-footer-contact-mail">-E-Mail-</a> 
        <a href="tel: 0739279944" class="home-footer-contact-tel">-Phone-</a> </div>
        <div class="home-footer-links"><a href="https://github.com/henrik-foogel" target="_blank" class="home-footer-links-git">-Github-</a> 
        <a href="https://linkedin.com/in/henrik-foogel-3118a53a" target="_blank" class="home-footer-links-linkd">-Linkedin-</a></div>

      </footer>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      showProjects: false
    }
  },
  methods: {
    moviesSwipe() {
      this.$store.state.activeSlide = 2;
    }
  }
}
</script>

<style lang="scss">
</style>
