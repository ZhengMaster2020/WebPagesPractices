import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/index'
import router from './routers/index'
import axios from 'axios'
import iview from 'iview'
import 'iview/dist/styles/iview.css'


Vue.config.productionTip = false

Vue.prototype.$axios = axios

Vue.use(VueRouter)
Vue.use(iview)
Vue.use(axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')