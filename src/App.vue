<template>
  <div id="app">
    <div class="circle one"></div>
    <nav class="menu">
      <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
      <label class="menu-open-button" for="menu-open">
        <span class="hamburger hamburger-1"></span>
        <span class="hamburger hamburger-2"></span>
        <span class="hamburger hamburger-3"></span>
      </label>      
    </nav>

    <vue-canvas-nest :config="config"/>
  </div>
</template>

<script>
import vueCanvasNest from "vue-canvas-nest";
export default {
  name: "app",
  components: { vueCanvasNest },
  data() {
    return {
      config: {
        color: "0,255,0",
        count: 500,
        opacity: 1
      }
    };
  }
};
</script>

<style lang="scss">
@import "src/sass/_app";

body {
  background-color: $bg;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $bg1;
  margin-top: 60px;
}

/****************************************/
/*                Navbar                */
/****************************************/

%ball {
  background: $fg;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  margin-left: -40px;
  position: absolute;
  top: 20px;
  color: white;
  text-align: center;
  line-height: 80px;
  transform: translate3d(0, 0, 0);
  transition: transform ease-out 200ms;
}
.menu-open {
  display: none;
}
.menu-item {
  @extend %ball;
}
.hamburger {
  $width: 25px;
  $height: 3px;
  width: $width;
  height: $height;
  background: white;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -$width/2;
  margin-top: -$height/2;
  transition: transform 200ms;
}
$hamburger-spacing: 8px;
.hamburger-1 {
  transform: translate3d(0, -$hamburger-spacing, 0);
}
.hamburger-2 {
  transform: translate3d(0, 0, 0);
}
.hamburger-3 {
  transform: translate3d(0, $hamburger-spacing, 0);
}
.menu-open:checked + .menu-open-button {
  .hamburger-1 {
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  .hamburger-2 {
    transform: translate3d(0, 0, 0) scale(0.1, 1);
  }
  .hamburger-3 {
    transform: translate3d(0, 0, 0) rotate(-45deg);
  }
}
.menu {
  filter: url("#shadowed-goo");
  $width: 650px;
  $height: 150px;
  position: absolute;
  left: 50%;
  margin-left: -80px;
  padding-top: 20px;
  padding-left: 80px;
  width: $width;
  height: $height;
  box-sizing: border-box;
  font-size: 20px;
  text-align: left;
}

.menu-item {
  &:hover {
    background: white;
    color: $fg;
  }
  @for $i from 1 through $menu-items {
    &:nth-child(#{$i + 2}) {
      transition-duration: 180ms;
    }
  }
}

.menu-open-button {
  @extend %ball;
  z-index: 2;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 400ms;
  transform: scale(1.1, 1.1) translate3d(0, 0, 0);
  cursor: pointer;
}
.menu-open-button:hover {
  transform: scale(1.2, 1.2) translate3d(0, 0, 0);
}
.menu-open:checked + .menu-open-button {
  transition-timing-function: linear;
  transition-duration: 200ms;
  transform: scale(0.8, 0.8) translate3d(0, 0, 0);
}

.menu-open:checked ~ .menu-item {
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  @for $i from 1 through $menu-items {
    &:nth-child(#{$i + 2}) {
      transition-duration: 90ms+ (80ms * $i);
      transform: translate3d((80px * $i), 0, 0);
    }
  }
}

/****************************************/
/*            Efecto circulo            */
/****************************************/
* {
  overflow: hidden;
  margin: 0;
}
@keyframes circle {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(6);
  }
}
.circle {
  margin: 0 auto;
  width: 300px;
  height: 300px;
  border: 20px solid CadetBlue;
  border-radius: 50%;
  position: absolute;
  top: 5%;
  left: 40%;
}
.one {
  animation: circle 4s infinite linear;
}
</style>
