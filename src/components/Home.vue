<template>
  <article class="home">
    <section class="container">
      <section class="home-title">
        <h1>Henrik Foogel</h1>
        <p>- Frontend Developer -</p>
      </section>
      <section class="home-content">
        <img class="top-photo" src="../assets/HenrikFoogel.jpg" alt="" />
        <FlipCard :flip="flip">
          <template slot="front">
            <About />
          </template>
          <template slot="back">
            <carousel :perPage="1" :navigateTo="drag" :paginationEnabled="false" @page-change="pageChange">
              <slide>
                <AboutMovieShelf @flipBack="flipBack" @left="slideLeft" @right="slideRight" />
              </slide>
              <slide>
                <AboutGallery @flipBack="flipBack" @left="slideLeft" @right="slideRight" />
              </slide>
            </carousel>
          </template>
        </FlipCard>
        <div class="home-open-projects-menu-btn">Links to some of my projects</div>
        <section class="home-project-buttons">
          <div class="home-project-buttons-container">
            <div class="home-project-btn fa fa-film" @click="chooseProject('movie')" />
            <p>Final Degree Project</p>
          </div>
          <div class="home-project-buttons-container">
            <div class="home-project-btn fa fa-file-image-o" @click="chooseProject('gallery')"></div>
            <p>Gallery</p>
          </div>
        </section>
      </section>
      <footer class="home-footer">
        <div class="home-footer-contact">
          <a href="mailto: henrik.foogel@gmail.com" class="home-footer-contact-mail"><img src="../assets/gm.svg"/></a>
          <a href="https://github.com/henrik-foogel" target="_blank" class="home-footer-links-git"
            ><img src="../assets/gi.svg"
          /></a>
          <a href="https://linkedin.com/in/henrik-foogel-3118a53a" target="_blank" class="home-footer-links-linkd"
            ><img src="../assets/li.svg"
          /></a>
        </div>
      </footer>
    </section>
  </article>
</template>

<script>
import About from "./About.vue";
import AboutMovieShelf from "./AboutMovieShelf.vue";
import AboutGallery from "./AboutGallery.vue";
import FlipCard from "./others/FlipCard.vue";
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Home",
  components: {
    About,
    AboutMovieShelf,
    AboutGallery,
    FlipCard,
    Carousel,
    Slide,
  },
  data() {
    return {
      showProjects: false,
      showAbout: true,
      showMovieShelf: true,
      showGallery: false,
      flip: true,
      drag: 0,
      projects: 1,
    };
  },
  methods: {
    moviesSwipe() {
      this.$store.state.activeSlide = 2;
    },
    flipBack(e) {
      this.flip = e;
    },
    chooseProject(project) {
      this.flip = false;
      if (project === "movie") {
        this.showMovieShelf = true;
        this.showGallery = false;
        this.drag = 0;
      } else if (project === "gallery") {
        this.showGallery = true;
        this.showMovieShelf = false;
        this.drag = 1;
      }
    },
    slideLeft(e) {
      if (this.drag !== 0) {
        this.drag = this.drag - e;
      }
    },
    slideRight(e) {
      if (this.drag !== this.projects) {
        this.drag = this.drag + e;
      }
    },
    pageChange(e) {
      this.drag = e;
    },
  },
};
</script>

<style lang="scss"></style>
