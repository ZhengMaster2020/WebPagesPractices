import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      meta: { title: '首页' }, 
      component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    { 
      path: '/login', 
      meta: { title: '登录' }, 
      component: () => import('../views/Login.vue')
    },
    { 
      path: '/cart', 
      meta: { title: '首页' }, 
      component: () => import('../views/Cart.vue')
    },
    { 
      path: '/products/:id', 
      meta: { title: '首页' },
      component: () => import('../views/ProductDetail.vue')
    },
    { 
      path: '*', 
      meta: { title: '页面丢失' },
      component: () => import('../views/NotFound.vue') }
  ]
})



export default router