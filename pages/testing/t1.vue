<template>
  <div>
    <div>
      <p>
        Page created for testing login function, usersname & password are hard
        coded as [admin, uskuu]
      </p>
      <p>Check token cookies at dev console > application > cookies</p>
      <p>Check get users at dev console</p>
    </div>
    <div>
      <h3>Current Status: {{ authStatus }}</h3>
      <button v-on:click="login">Login</button> <br />
      <button v-on:click="logout">Logout</button> <br />
      <button v-on:click="getCurrentAccountInfo">Get Current info</button>
      <br />
      <button v-on:click="initDashboardData">Get Data</button>
    </div>

    <div>
      <RegisterPopup />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'
import RegisterPopup from '../../components/RegisterPopup.vue'

export default {
  components: { RegisterPopup },

  computed: {
    // ...mapState({
    //   accessToken: (state) => state.auth.token.access,
    //   refresshToken: (state) => state.auth.token.refresh
    // })
    ...mapGetters({
      authStatus: 'auth/authStatus'
    })
  },

  // data() {
  //   return {
  //     message: this.$store.state.isAuthenticated
  //   }
  // },

  methods: {
    // ...mapMutations({
    //   toggle: 'auth/toggle'
    // }),
    ...mapActions({
      logout: 'auth/logout',
      showCookies: 'auth/showCookies',
      getCurrentAccountInfo: 'account/getCurrentAccountInfo',
      initDashboardData: 'dashboard/initDashboardData'
    }),

    // *  Mockup login with hard-coded username & password
    // *  Testing purpose
    login() {
      this.$store.dispatch('auth/login', {
        username: 'admin',
        password: 'uskuu'
        // password: 'buskuu'
      })
    }
  }

  // async fetch() {
  //   this.$axios
  //     .post('/login/', {
  //       username: 'admin',
  //       password: 'uskuu'
  //     })
  //     .then((res) => console.info(res.data.access))
  // }
}
</script>

<style>
button {
  background-color: darkcyan;
  border-radius: 10%;
  border-color: coral;
  margin-bottom: 10px;
}

button:hover {
  color: white;
}
</style>
