import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/index'
import router from './routers/index'
import iview from 'iview'
import 'iview/dist/styles/iview.css'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(iview)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')