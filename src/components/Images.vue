<template>
  <section class="gallery-content">
      <div class="gallery-images-show" v-show="!imageLarge">
    <div class="gallery-image" @click="imageLarge = true, chosenImage = 1">
      <img class="gallery-image-img" src="@/assets/gallery/1.jpg">
    </div>
    <div class="gallery-image" @click="imageLarge = true, chosenImage = 2">
      <img class="gallery-image-img" src="@/assets/gallery/2.jpg">
    </div>
    <div class="gallery-image" @click="imageLarge = true, chosenImage = 3">
      <img class="gallery-image-img" src="@/assets/gallery/3.jpg">
    </div>
    <div class="gallery-image" @click="imageLarge = true, chosenImage = 4">
      <img class="gallery-image-img" src="@/assets/gallery/4.jpg">
    </div>
    <div class="gallery-image" @click="imageLarge = true, chosenImage = 5">
      <img class="gallery-image-img" src="@/assets/gallery/5.jpg">
    </div>
    <div class="gallery-image" @click="imageLarge = true, chosenImage = 6">
      <img class="gallery-image-img" src="@/assets/gallery/6.jpg">
    </div>
    <div class="gallery-image" @click="imageLarge = true, chosenImage = 7">
      <img class="gallery-image-img" src="@/assets/gallery/7.jpg">
    </div>
    <div class="gallery-image" @click="imageLarge = true, chosenImage = 8">
      <img class="gallery-image-img" src="@/assets/gallery/8.jpg">
    </div>
    <div class="gallery-image" @click="imageLarge = true, chosenImage = 9">
      <img class="gallery-image-img" src="@/assets/gallery/9.jpg">
    </div>
    <div class="gallery-image" @click="imageLarge = true, chosenImage = 10">
      <img class="gallery-image-img" src="@/assets/gallery/10.jpg">
    </div>
    </div>
    <section class="gallery-image-slider" v-show="imageLarge">
        <div class="gallery-image-slider-slide" @click="lastImage">&#8249;</div>
            <img class="gallery-image-slider-img" src="@/assets/gallery/1.jpg" v-if="chosenImage == 1" @click="imageLarge = false">
            <img class="gallery-image-img" src="@/assets/gallery/2.jpg" v-if="chosenImage == 2" @click="imageLarge = false">
            <img class="gallery-image-img" src="@/assets/gallery/3.jpg" v-if="chosenImage == 3" @click="imageLarge = false">
            <img class="gallery-image-img" src="@/assets/gallery/4.jpg" v-if="chosenImage == 4" @click="imageLarge = false">
            <img class="gallery-image-img" src="@/assets/gallery/5.jpg" v-if="chosenImage == 5" @click="imageLarge = false">
            <img class="gallery-image-img" src="@/assets/gallery/6.jpg" v-if="chosenImage == 6" @click="imageLarge = false">
            <img class="gallery-image-img" src="@/assets/gallery/7.jpg" v-if="chosenImage == 7" @click="imageLarge = false">
            <img class="gallery-image-img" src="@/assets/gallery/8.jpg" v-if="chosenImage == 8" @click="imageLarge = false">
            <img class="gallery-image-img" src="@/assets/gallery/9.jpg" v-if="chosenImage == 9" @click="imageLarge = false">
            <img class="gallery-image-img" src="@/assets/gallery/10.jpg" v-if="chosenImage == 10" @click="imageLarge = false">
            <span class="fa fa-times" @click="imageLarge = false"></span>
        <div class="gallery-image-slider-slide" @click="nextImage">&#8250;</div>
    </section>
  </section>
</template>

<script>
export default {
  name: "images",
  data() {
      return {
          imageLarge: false,
          chosenImage: 1,
          numOfImages: 10
      }
  },
    methods: {
        nextImage() {
            if(this.chosenImage == 10) {
                this.chosenImage = 1;
            } else {
                this.chosenImage++
            }
        },
        lastImage() {
            if(this.chosenImage == 1) {
                this.chosenImage = this.numOfImages;
            } else {
                this.chosenImage--
            }
        },
    }
};
</script>