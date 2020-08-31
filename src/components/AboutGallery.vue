<template>
  <div class="about-gallery-container">
    <i class="fa fa-undo" @click="flipBack"></i>
    <div class="about-gallery-v-text">
      I like to photograf cats every time I'm in Greece.
      <br />These photos were taken on Rhodes and Crete.
    </div>
    <img class="gallery-images" src="../assets/projects/catgallery.png" />
    <div class="link-container">
      <div>Link to gallery:</div>
    </div>
    <div class="project-inside-footer">
      <i class="fa fa-arrow-left" @click="left" />
      <div @click="$router.push('/gallery')" class="link-img fa fa-file-image-o" target="blank" />
      <i class="fa fa-arrow-right" @click="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: "about-gallery",
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
.about-gallery-container {
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
    margin-bottom: 0.5rem;
  }

  .gallery-logo {
    width: 15rem;
    margin-bottom: 0.5rem;
  }

  .about-gallery-v-text {
    margin-bottom: 2rem;
  }

  .gallery-images {
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

      &.fa-arrow-right {
        color: rgba(255, 255, 255, 0.329);
        cursor: default;
      }
    }

    div {
      color: $text;
      font-size: 2rem;
      cursor: pointer;
    }
  }
}
</style>
