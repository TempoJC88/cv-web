<template lang="html">
  <section id="home" class="section hero is-primary is-fullheight">   
    <div class="container">
        <div class="example">
          <div class="example__img" style="background-image: url('https://aruco.com/app/uploads/2015/01/developpeurs-code-informatique-objets-connectes.jpg')">
            <div class="glitch__img" style="background-image:url('https://aruco.com/app/uploads/2015/01/developpeurs-code-informatique-objets-connectes.jpg')"></div>
            <div class="glitch__img" style="background-image:url('https://aruco.com/app/uploads/2015/01/developpeurs-code-informatique-objets-connectes.jpg')"></div>
            <div class="glitch__img" style="background-image:url('https://aruco.com/app/uploads/2015/01/developpeurs-code-informatique-objets-connectes.jpg')"></div>
            <div class="glitch__img" style="background-image:url('https://aruco.com/app/uploads/2015/01/developpeurs-code-informatique-objets-connectes.jpg')"></div>
            <div class="glitch__img" style="background-image:url('https://aruco.com/app/uploads/2015/01/developpeurs-code-informatique-objets-connectes.jpg')">
          </div>
          </div>
          <div class="example__info">
            <h4 class="title example__name">Hola, mi nombre es Jose Luis Camargo.</h4>
            <h5 class="subtitle example__name">Soy un desarrollador web front-end</h5>
            <!--
            <a class="example__link text-code-hover-feel">Learn More</a>
            -->
          </div>
        </div>                      
    </div>
    <vue-canvas-nest :config="config"/>
  </section>
</template>

<script>
import vueCanvasNest from "vue-canvas-nest";
export default {
  components: { vueCanvasNest },
  data() {
    return {
      config: {
        color: "253, 254, 253",
        count: 250,
        opacity: 0.5
      }
    };
  }
};
</script>

<style lang="scss">
@import "src/sass/_app";

.vue-canvas-nest-element {
  z-index: 1 !important;
}

// Variables
// =================================

$cubic: cubic-bezier(0.19, 1, 0.22, 1);

// Unnecessary Styles
// =================================

#home {
  font-family: "Exo 2", sans-serif;
  background: linear-gradient(to right, #170e2a 0, #2f0028 100%);
}

h4 {
  margin: 0;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.4;
}
a {
  text-decoration: none;
}

// Styling
// =================================

:root {
  --gap-horizontal: 10px;
  --gap-vertical: 5px;
  --time-anim: 2s;
  --delay-anim: 0s;
  --blend-mode-1: none;
  --blend-mode-2: none;
  --blend-mode-3: none;
  --blend-mode-4: none;
  --blend-mode-5: overlay;
  --blend-color-1: transparent;
  --blend-color-2: transparent;
  --blend-color-3: transparent;
  --blend-color-4: transparent;
  --blend-color-5: #af4949;
}

.example {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.9em;
  cursor: pointer;
  &:hover {
    .example__img {
      .glitch__img:nth-child(n + 2) {
        animation-duration: var(--time-anim);
        animation-delay: var(--delay-anim);
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
      }

      .glitch__img:nth-child(2) {
        background-color: var(--blend-color-2);
        background-blend-mode: var(--blend-mode-2);
        -webkit-animation-name: glitch-anim-1;
        animation-name: glitch-anim-1;
      }

      .glitch__img:nth-child(3) {
        background-color: var(--blend-color-3);
        background-blend-mode: var(--blend-mode-3);
        -webkit-animation-name: glitch-anim-2;
        animation-name: glitch-anim-2;
      }

      .glitch__img:nth-child(4) {
        background-color: var(--blend-color-4);
        background-blend-mode: var(--blend-mode-4);
        -webkit-animation-name: glitch-anim-3;
        animation-name: glitch-anim-3;
      }

      .glitch__img:nth-child(5) {
        background-color: var(--blend-color-5);
        background-blend-mode: var(--blend-mode-5);
        -webkit-animation-name: glitch-anim-flash;
        animation-name: glitch-anim-flash;
      }
    }

    .example__link {
      color: red;
      &:before {
        transform: scaleX(0);
        transition-delay: 0s;
        transform-origin: right;
      }
      &:after {
        transform: scaleX(1);
        background: red;
        transition-delay: 0.2s;
        transform-origin: left;
      }
    }
  }
}

.example__img {
  width: 23em;
  height: 31.7em;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: 2;
  &:before {
    position: absolute;
    content: "";
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(to left, #583991 0, #223991 100%);
    mix-blend-mode: hard-light;
  }
}

.glitch {
  overflow: hidden;
  position: relative;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}
.glitch__img {
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--blend-color-1);
  transform: translate3d(0, 0, 0);
  background-blend-mode: var(--blend-mode-1);
  &:nth-child(n + 2) {
    opacity: 0;
  }
}

@keyframes glitch-anim-1 {
  0%,
  100% {
    opacity: 1;
    transform: translate3d(var(--gap-horizontal), 0, 0) scale3d(-1, -1, 1);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
  }

  20% {
    clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
  }

  30% {
    clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
  }

  40% {
    clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
  }

  50% {
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
  }

  55% {
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
  }

  60% {
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
  }

  65% {
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
  }

  70% {
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
  }

  80% {
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
  }

  85% {
    clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%);
  }

  95% {
    clip-path: polygon(0 72%, 100% 72%, 100% 78%, 0 78%);
  }
}

@keyframes glitch-anim-2 {
  0%,
  100% {
    opacity: 1;
    transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0);
    clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
  }

  10% {
    clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
  }

  15% {
    clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
  }

  17% {
    clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
  }

  19% {
    clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
  }

  33% {
    clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
  }

  35% {
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
  }

  40% {
    clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
  }

  45% {
    clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
  }

  49% {
    clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
  }

  50% {
    clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
  }

  55% {
    clip-path: polygon(0 15%, 100% 15%, 100% 35%, 0 35%);
  }

  60% {
    clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
  }

  70% {
    clip-path: polygon(0 65%, 100% 65%, 100% 60%, 0 60%);
  }

  80% {
    clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%);
  }

  90% {
    clip-path: polygon(0 55%, 100% 55%, 100% 65%, 0 65%);
  }
}

@keyframes glitch-anim-3 {
  0%,
  100% {
    opacity: 1;
    transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0)
      scale3d(-1, -1, 1);
    clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
  }

  5% {
    clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
  }

  11% {
    clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
  }

  20% {
    clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
  }

  25% {
    clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
  }

  35% {
    clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
  }

  42% {
    clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
  }

  48% {
    clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
  }

  50% {
    clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
  }

  56% {
    clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
  }

  61% {
    clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
  }

  68% {
    clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
  }

  72% {
    clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
  }

  77% {
    clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
  }

  81% {
    clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
  }

  86% {
    clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
  }

  90% {
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
  }

  92% {
    clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
  }

  94% {
    clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
  }
}

@keyframes glitch-anim-flash {
  0%,
  5% {
    opacity: 0.2;
    transform: translate3d(var(--gap-horizontal), var(--gap-vertical), 0);
  }

  100%,
  5.5% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
}

.example__name {
  max-width: 20em;
}
.example__info {
  font-size: 3rem;
  z-index: 2;
  position: absolute;
  top: 30%;
  left: 20%;
}
.example__link {
  margin-top: 20px;
  position: relative;
  font-size: 1rem;
  font-weight: 700;
  color: #d2cfff;
  text-transform: uppercase;
  letter-spacing: 2.8px;
  padding-left: 132px;
  height: 20px;
  display: block;
  transition: all 0.2s;
  &:before,
  &:after {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background: #b836c6;
    position: absolute;
    top: 9px;
    left: 0;
    transition: transform 0.2s ease-in-out;
  }
  &:before {
    transition-delay: 0.2s;
    transform-origin: left;
  }
  &:after {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>