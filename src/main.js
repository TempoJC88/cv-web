import Vue from 'vue'
import App from './App.vue'


import VueScrollactive from "vue-scrollactive";
Vue.use(VueScrollactive);

new Vue({
  el: '#app',
  render: h => h(App)
})
