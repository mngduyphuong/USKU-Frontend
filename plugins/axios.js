// eslint-disable-next-line no-unused-vars
export default function ({ $axios, store }, inject) {
  // *  create a custom axios instance
  const authorizedAPI = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
        Authorization: `Bearer ${store.$cookies.get('accessToken')}`
      }
    }
  })

  authorizedAPI.onError((error) => {
    // TODO Update handling for different error codes
    const code = parseInt(error.response && error.response.status)

    // *  handle error 401-unauthorized
    if (code === 401) {
      // *  handle when access token expires
      if (error.response.data.messages[0].token_type === 'access') {
        // *  get new access token using refresh token saved in browser cookie
        $axios
          .$post('login/refresh/', {
            refresh: store.$cookies.get('refreshToken')
          })
          .then((respData) => {
            // *  store new access token using browser cookie
            store.$cookies.set('accessToken', respData.access)

            // *  set new access token & retry the last request
            let retryConfig = error.config
            retryConfig.headers.Authorization = `Bearer ${respData.access}`

            $axios(retryConfig)
          })
          // *  catch error when refresh token has been expired
          .catch((error) => {
            console.error(error)
            store.dispatch('auth/logout')
            alert('Your session has been expired')
          })
      } else {
        // *  automatically logout when receiving 401 errors, will be updated later
        store.dispatch('auth/logout')
        alert('Your session has been expired')
      }
    }
  })

  // *  Inject to context as $authorizedAPI
  // *  Call `this.$authorizedAPI` instead of `this.$axios` with request containing JWT in header
  inject('authorizedAPI', authorizedAPI)
}
