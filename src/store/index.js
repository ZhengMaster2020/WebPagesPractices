import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cartCount: 0
}

const mutations = {
  addCartCount (state, count) {
    state.cartCount += count
    console.log(`store.state.cartCount= ${state.cartCount}`)
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