<template lang="html">
  <section id="home" class="section hero is-primary is-fullheight">   
    <div class="container">
      <vue-canvas-nest :config="config"/>
    </div> 
  </section>
</template>

<script>
import vueCanvasNest from "vue-canvas-nest";
export default {
  components: { vueCanvasNest },
  data() {
    return {
      config: {
        color: "94, 183, 119",
        count: 300,
        opacity: 1
      }
    };
  }
};
</script>

<style lang="scss">
@import "src/sass/_app";

.hero.is-fullheight {
    min-height: 100vh;
}

.hero.is-primary {
    background-color: #00d1b2;
    color: #fff;
}
.section {
    background-color: #fff;
}
.hero {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
</style>