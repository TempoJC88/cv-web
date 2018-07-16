<template lang="html">
    <header id="site-header" class="nav is-fixed">
      <div class="container">
        <scrollactive ref="scrollactive" :offset="offset" :always-track="alwaysTrack" :duration="duration" :click-to-scroll="clickToScroll" :bezier-easing-value="easing">
          <ul class="nav-center">
            <li><a href="#home" class="scrollactive-item nav-item">Home</a></li>
            <li><a href="#section-2" class="scrollactive-item nav-item">Section 2</a></li>
            <li><a href="#section-3" class="scrollactive-item nav-item">Section 3</a></li>
            <li><a href="#section-4" class="scrollactive-item nav-item">Section 4</a></li>
          </ul>
        </scrollactive>
      </div>
    </header> 
</template>

<script>
export default {
  data() {
    return {
      alwaysTrack: false,
      duration: 600,
      clickToScroll: true,
      offset: 0,
      easing: ".5,0,.35,1"
    };
  }
};
</script>

<style lang="scss">
@import "src/sass/_app";

.nav.is-fixed {
  position: fixed;
  left: 0;
  right: 0;

  .is-active {
    color: $fg;
  }
}
</style>