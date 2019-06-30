import Vue from 'vue'
import App from './App.vue'
import router from './routers'//省略了index.js
import store from './stores'//省略了index.js

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
