import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cartList: [],
  cartCount: 0,
}

const mutations = {

  // 添加商品到购物车
  addToCart(state, product) {
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
        isExit.count++
      }
    } else {
      state.cartList.push({
        pid: product.product.pid,
        count
      })
    }
  },

  // 修改购物车里面商品的数量
  editCartCount(state, payload) {
    const product = state.cartList.find(item => item.pid === payload.pid)
    product.count += payload.count
  },

  // 从购物车移除该商品
  removeCart(state, pid) {
    // 查找要删除的商品在cartList中对应的索引值
    const p_index = state.cartList.findIndex(item => item.pid === pid)
    // 通过数组的splice方法从cartList数组中移除该商品
    state.cartList.splice(p_index, 1)
  },

  // 清空购物车
  clearCart(state) {
    state.cartList = [];
  }
}

const getters = {}

const actions = {
  handlePayMoney ({commit}) {
    // 简单模拟支付功能 
    return new Promise(resolve => {
      setTimeout(() => {
        commit('clearCart')
      }, 300)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})