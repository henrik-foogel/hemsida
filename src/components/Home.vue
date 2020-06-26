<template>
  <article class="home">
    <section class="container">
      <section class="home-title">
        <h1>Henrik Foogel</h1>
        <p>- Frontend Developer -</p>
      </section>
      <section class="home-content">
        <img src="../assets/HenrikFoogel.jpg" alt="">
        <div class="home-text">
          Welcome,
          My name is Henrik and I recently graduated as a Frontend-developer from Medieinstitutet in Gothenburg. My primary focus has been JavaScript with Vuejs as Framework. <br> 
          During my studies I've also learned NodeJs, MongoDB, PHP, SQL and NoSQL. Included in the sudies was also two terms of intenships.<br>
          <br>During the first internship I was at VGR / Digital Media where I got to work mostly with Wordpress / HTML / CSS, but also a little bit of Python and Javascript.
          <br><br>During the second internship I had I was at a company called Quality Think, where I got to work with Javascript / Vue.js / React Native / Wordpress / HTML / Sass.
          <br><br>After my studies ended I started an internship at another company called Flourish Feedback where I work with Javascript / Vue.js / Sass. I have references from all three internships.
          <br>As a person I'm calm, reliable and hard working. I always help out where I'm needed and do what I can for others.
        </div>
        <div class="home-open-projects-menu-btn">Links to some of my stuff</div>
        <section class="home-project-buttons">
          <div class="home-project-buttons-container">
          <a class="home-project-btn fa fa-film" href="http://henrik-foogel.com/projects/mymovieshelf/#/"></a>
          <p>Your Movie Shelf</p>
          </div>
          <div class="home-project-buttons-container">
          <div class="home-project-btn fa fa-file-image-o" @click="$router.push('/gallery')"></div>
          <p>My Photo Gallery</p>
          </div>
        </section>
      </section>
      <footer class="home-footer">
        <div class="home-footer-contact"><a href="mailto: henrik.foogel@gmail.com" class="home-footer-contact-mail"><img src="../assets/gm.svg"></a> 
        <a href="https://github.com/henrik-foogel" target="_blank" class="home-footer-links-git"><img src="../assets/gi.svg"></a> 
        <a href="https://linkedin.com/in/henrik-foogel-3118a53a" target="_blank" class="home-footer-links-linkd"><img src="../assets/li.svg"></a></div>

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
