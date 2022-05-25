export const actions = {
  async postOrder({ commit }) {
    try {
      let response = await this.$axios.post('api/setOrder/')
      commit('SET_ORDER', response.data)
    } catch (e) {
      console.log(e)
    }
  }
}
