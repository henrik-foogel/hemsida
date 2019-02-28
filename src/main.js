import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import touch from 'vue2-touch-events'

Vue.config.productionTip = false

Vue.use(touch)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
