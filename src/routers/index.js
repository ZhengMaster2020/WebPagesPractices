import Vue from 'vue'
import VueRouter from 'vue-router'


const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      name: 'index',
      meta: { title: '首页' }, 
      component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    { 
      path: '/login', 
      name: 'login',
      meta: { title: '登录' }, 
      component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
    },
    { 
      path: '/cart', 
      name: 'cart',
      meta: { title: '购物车', requestAuth: true }, 
      component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue')
    },
    { 
      path: '/products/:id', 
      name: 'products',
      meta: { title: '商品详情' },
      component: () => import(/* webpackChunkName: "ProductDetail" */ '../views/ProductDetail.vue')
    },
    { 
      path: '*', 
      meta: { title: '页面丢失' },
      component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue') }
  ]
})

// 根据页面不同设计不同的页面标题
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default router