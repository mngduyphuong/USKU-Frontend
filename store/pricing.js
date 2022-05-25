export const state = () => ({
  pricings: []
})

export const mutations = {
  SET_PRICINGS(state, pricings) {
    state.pricings = pricings
  }
}

export const actions = {
  async loadPricings({ commit }) {
    try {
      let response = await this.$axios.get('api/pricing/')
      commit('SET_PRICINGS', response.data)
    } catch (e) {
      console.log(e)
    }
  }
}
