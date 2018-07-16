<template>
  <div id="app">
    
    <Header></Header>
  

    <main>
      <Home></Home>

      <section id="section-2" class="section hero is-info is-fullheight">
        <div class="container">
          <h1 class="heading title is-1">Section 2</h1>
        </div>
      </section>

      <section id="section-3" class="section hero is-danger is-fullheight">
        <div class="container">
          <h1 class="heading title is-1">Section 3</h1>
        </div>
      </section>

      <section id="section-4" class="section hero is-success is-fullheight">
        <div class="container">
          <h1 class="heading title is-1">Section 4</h1>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "./views/Header";
import Home from "./views/Home";
import Skills from "./views/Skills";
export default {
  name: "app",
  components: { Header, Home, Skills }
};
</script>

<style lang="scss">
@import "src/sass/_app";
</style>