<template>
  <div id="app">    
    <Header></Header>
    <div id="main-container">
      <Home/>
      <Skills/>
    </div>
  </div>
</template>

<script>

import Header from "./views/Header";
import Home from "./views/Home";
import Skills from "./views/Skills";
export default {
  name: "app",
  components: { Header, Home, Skills },
  data() {
    return {
     
    };
  }
};
</script>

<style lang="scss">
@import "src/sass/_app";

#app {
  margin: 0;
  color: #4a4a4a;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main-container{
  display: block;
}

.container {
    position: relative;
}

@media screen and (min-width: 1192px){
  .container {
      max-width: 1152px;
      width: 1152px;
  }
}
  
@media screen and (min-width: 1000px) {
  .container {
      margin: 0 auto;
      max-width: 960px;
      width: 960px;
  }
}
</style>