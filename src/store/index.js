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
    console.log(state.cartList)
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