<template>
  <div class="about-movie-shelf-container">
    <i class="fa fa-undo" @click="flipBack"></i>
    <img class="movie-shelf-logo" src="../assets/projects/movieshelflogo.png" />
    <div class="about-movie-shelf-v-text">
      The project's target demographic is film and partly soundtrack collectors.
      <br />The basic idea was to give them a tool where they can register their collections and create their own
      categories so that they can also keep track of where in their collection they’re located. <br />An addition was
      that you can also register your soundtrack collection. <br />The framework I used is Vue.Js with Sass and the
      databases I used are OMDB, Discogs for the film/music data and Firebase / Firestore for storing your collections.
    </div>
    <img class="movie-shelf-images" src="../assets/projects/msb.png" />
    <div class="link-container">
      <div>Link to full project:</div>
    </div>
    <div class="project-inside-footer">
      <i class="fa fa-arrow-left" @click="left" />
      <a href="http://henrik-foogel.com/projects/mymovieshelf/#/" class="link-img fa fa-film" target="blank" />
      <i class="fa fa-arrow-right" @click="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: "about-movie-shelf",
  data() {
    return {};
  },
  methods: {
    flipBack() {
      this.$emit("flipBack", true);
    },
    left() {
      this.$emit("left", 1);
    },
    right() {
      this.$emit("right", 1);
    },
  },
};
</script>

<style lang="scss">
@import "../scss/__variables";
.about-movie-shelf-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem 2rem;
  color: $text;
  font-weight: 500;
  background: $behind;
  border-radius: 1rem;
  line-height: 1.5;
  letter-spacing: 0.05em;
  border: 1px solid #fff;
  margin-bottom: 3rem;

  .fa-undo {
    font-size: 2rem;
    cursor: pointer;
  }

  .movie-shelf-logo {
    width: 15rem;
    margin-bottom: 0.5rem;
  }

  .about-movie-shelf-v-text {
    margin-bottom: 2rem;
  }

  .movie-shelf-images {
    width: 100%;
    border-radius: 0.5rem;
    border: 2px solid #fff;
  }

  .link-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .project-inside-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;

    i {
      font-size: 2rem;
      cursor: pointer;

      &.fa-arrow-left {
        color: rgba(255, 255, 255, 0.329);
        cursor: default;
      }
    }

    a {
      color: $text;
      font-size: 2rem;
    }
  }
}
</style>
