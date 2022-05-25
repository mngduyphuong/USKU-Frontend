/* eslint-disable no-unused-vars */
export const state = () => ({
  authStatus: 'unauthenticated'
})

export const getters = {
  authStatus: (s) => s.authStatus
}

export const mutations = {
  // *  change auth status to `authenticated`
  authenticateUser(state) {
    state.authStatus = 'authenticated'
  },

  // *  change auth status to `unauthenticated` (logged out)
  disapproveUser(state) {
    state.authStatus = 'unauthenticated'
  },

  // *  change auth status to `refreshing` (when access token expires)
  changeStatusToRefreshing(state) {
    state.authStatus = 'refreshing'
  }
}
const Swal = require('sweetalert2')
export const actions = {
  login({ commit, dispatch }, payload) {
    // *  login to backend with payload data (username & password from login page)
    // console.log(payload)
    this.$axios
      .$post('login/', payload)
      .then((respData) => {
        commit('authenticateUser')

        // *  get account info when logged in
        dispatch('account/getCurrentAccountInfo', null, { root: true })

        // *  set received tokens to browser cookies
        this.$cookies.set('accessToken', respData.access)
        this.$cookies.set('refreshToken', respData.refresh)

        // *  set access token to request header
        this.$authorizedAPI.setToken(respData.access, 'Bearer')

        // !  set wrong access token, used for testing refreshing token, be deleted later
        // this.$authorizedAPI.setToken(respData.access.concat('abc'), 'Bearer')
      })
      .then(() => {
        // *  redirect to home, will be changed later

        Swal.fire('', 'Welcome back, ' + `${payload.username}`, 'success').then(
          (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              this.$router.push('/')
            }
          }
        )
      })
      .catch((error) => {
        //alert(error.response.data.detail)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: 'Please check your login details'
        })
      })
  },

  async logout({ commit, dispatch }) {
    commit('disapproveUser')

    // *  remove all cookies & axios tokens
    this.$cookies.removeAll()
    this.$authorizedAPI.setToken(null)

    // * remove account data when logged out
    await dispatch('account/removeAccountInfo', null, { root: true })

    // *  redirect to login
    // *  currently disabled, will be finalized once logout button created
    this.$router.push('/')
  },

  register({ commit, dispatch }, payload) {
    this.$axios
      // *  first register new user to backend
      .$post('register/', payload)
      // *  then login with registered username & password
      .then((respData) => {
        dispatch('login', {
          username: payload.username,
          password: payload.password
        })
      })
      // !  as there aren't much rules created, the only registering error atm is password & not unique username
      // !  password validating are currently handled by backend
      // * will be updated & modularized later
      .catch((error) => {
        if (error.response.data.password) {
          // *  handle password related errors
          alert(error.response.data.password.join('\r\n'))
        } else if (error.response.data.username) {
          // *  handle username related errors
          alert('Another user has been created with this Username!')
        } else if (error.response.data.email) {
          // *  handle email related errors
          alert('Another user has been created with this Email!')
        } else {
          // *  handle unexpected errors
          alert(error)
        }
      })
  },

  // *  random api call function to test if authorized requests work
  getUsers({ commit, dispatch }, payload) {
    this.$authorizedAPI
      .$get('users/')
      .then((data) => {
        console.info(data)
      })
      .catch(console.error)
  }
}
