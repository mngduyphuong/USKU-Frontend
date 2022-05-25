export const actions = {
  async nuxtServerInit({ commit }) {
    // *  Data Init in server
    // *  Use case: when store modules refresh whenever page reloaded
    let cookies = this.$cookies.getAll()

    // *  User have refresh token when:
    // *  1. Logged in (also have access token) => auth status changed to `authenticated` in further nested-cond
    // *  2. Refreshing access token (have no access token) => auth status changed to `refreshing`
    if (cookies.refreshToken) {
      // ?  change auth status to `refreshing`
      commit('auth/changeStatusToRefreshing')

      if (cookies.accessToken) {
        // ?  change auth status to `authenticated` if also have access token
        commit('auth/authenticateUser')
      }
    }
  }
}
