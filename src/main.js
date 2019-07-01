import Vue from 'vue'
import App from './App.vue'
import router from './routers'//省略了index.js
import store from './stores'//省略了index.js

import axios from 'axios'
Vue.prototype.axios = axios;

Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
