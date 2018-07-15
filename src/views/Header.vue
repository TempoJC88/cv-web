<template lang="html">
    <header id="site-header" class="nav is-fixed">
        <div class="container">
        <scrollactive ref="scrollactive" :offset="offset" :always-track="alwaysTrack" :duration="duration" :click-to-scroll="clickToScroll" :bezier-easing-value="easing">  
            <ul class="nav-center">
            <li><a href="#home" class="scrollactive-item nav-item">HOME</a></li>
            <li><a href="#skills" class="scrollactive-item nav-item">SKILLS</a></li>
            </ul>
        </scrollactive>
        </div>
    </header>
</template>

<script>

export default {
  data() {
    return {
      
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
}

.nav {
    -webkit-box-align: stretch;
    align-items: stretch;
    background-color: #fff;
    display: flex;
    height: 3.25rem;
    position: relative;
    text-align: center;
    z-index: 10;
}

.nav-center {
    -webkit-box-align: stretch;
    align-items: stretch;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    flex-shrink: 0;
    -webkit-box-pack: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}

ul {
    list-style: none;
}

li{
    margin: 0;
    padding: 0;
}

.nav-item a, a.nav-item {
    color: #7a7a7a;
}

.nav.is-fixed .is-active {
    color: #00d1b2;
}

</style>