import axios from 'axios'

export const state = () => ({
  products: [],
  categories: [],
  last_page: '',
  total_pages: '',
})

export const mutations = {
  init (state, payload) {
    state.products = payload.data
    state.last_page = payload.last_page
    state.total_pages = payload.last_page
  },
  initCategories (state, payload) {
    payload.data.forEach(product => {
      if (!state.categories.includes(product.category)) {
        state.categories.push(product.category)
      }
    })
  },
  getProductsByCategory (state, payload) {
    state.products = payload.products.data.filter(product => product.category == payload.category_id)
  }
}

export const actions = {
  async getProductsByCategory ({commit}, payload) {
    commit('getProductsByCategory', payload)
  },
  async onSeach({ commit }, payload) {
    await $nuxt.$router.push({ path: 'search', query: { c: payload, page: this.$router.currentRoute.query.page || 1 } })
  }
}
