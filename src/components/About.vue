<template>
  <div class="about-container">
    Welcome,
    <br />My name is Henrik and I recently graduated as a Frontend-developer
    from Medieinstitutet in Gothenburg. My primary focus is JavaScript with
    Vue.js as Framework. <br />
    I have also studied NodeJs, MongoDB, PHP, SQL, NoSQL and had two terms of
    internships.<br />
    <br />I had my first internship at Västra GötalandsRegionen/Digital Media
    where I worked mostly with Wordpress, HTML and CSS, but also did a little
    bit of Python and Javascript. <br /><br />The second internship I had was at
    a company called Quality Think, where I worked with Javascript, Vue.js,
    React Native, Wordpress, HTML and Sass. <br /><br />After I graduated I
    started an internship at a company called Flourish Feedback where I work
    with Javascript, Vue.js and Sass. <br />I've also been working on a project
    made with React during my freetime.<br /><br />
    I have references from all three internships.
    <br />
    <br />I'm a calm, reliable and hard working person. I always help out where
    I'm needed and do what I can for others.
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../scss/__variables";
.about-container {
  padding: 2rem 1.5rem 2rem;
  font-weight: 700;
  border-bottom: 1px solid $grayTextLight;
  border-top: 1px solid $grayTextLight;
  background: $inner;
  border-radius: 1rem;
  line-height: 1.5;
  letter-spacing: 0.05em;
  border: 2px solid #000;
}
</style>
