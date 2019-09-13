import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

if (process.env.NODE_ENV !== 'production') {
  console.log(`we are in ${process.env.NODE_ENV} mode!`);
} else {
  console.log(`we are in ${process.env.NODE_ENV} mode!`)
}

new Vue({
  render: h => h(App)
}).$mount('#app')