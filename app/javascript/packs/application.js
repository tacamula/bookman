import Vue from 'vue/dist/vue.esm'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material/dist/vue-material'
import 'vue-material/dist/vue-material.css'
import 'sanitize.css/sanitize.css'

Vue.config.productionTip = false;

document.addEventListener('DOMContentLoaded', () => {
  Vue.use(VueMaterial)

  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
      App,
    }
  })
});
