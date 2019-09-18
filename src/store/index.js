import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cartList: [],
  cartCount: 0,
}

const mutations = {

  // 添加商品到购物车
  addToCart (state, product) {
    let count = 1
    const number = product.product.number || 0
    // 查看购物车是否已经存在改商品
    const isExit = state.cartList.find(item => item.pid === product.product.pid)
    if (isExit) {
      // 添加某件商品的个数大于1件的时候
      if (number !== 0) {
        isExit.count += number
      } else {
        // 添加某件商品的个数等于1件的时候
        isExit.count ++
      }
    } else {
      state.cartList.push({
        pid: product.product.pid,
        count
      })
    }
  },

  // 修改购物车里面商品的数量
  editCartCount (state, payload) {
    console.log(payload)
    const product = state.cartList.find(item => item.pid === payload.pid)
    product.count += payload.count
  },

  // 从购物车移除该商品
  removeCart (state, pid) {
    const p_index = state.cartList.findIndex()
    state.cartList.splice(p_index, 1)
  } 
}

const getters = {}

const actions = {}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})