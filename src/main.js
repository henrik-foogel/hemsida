import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import touch from 'vue2-touch-events'
import axios from 'axios'
import VueAxios from 'vue-axios'
 import VueFire from 'vuefire';

Vue.config.productionTip = false

Vue.use(touch, axios, VueAxios, VueFire)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
