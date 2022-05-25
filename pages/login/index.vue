<template>
  <div>
    <div class="container" data-app style="padding-bottom: 0">
      <div class="login position-relative">
        <div
          class="
            loginContent
            position-absolute
            top-50
            start-50
            translate-middle
          "
        >
          <img src="../../assets/img/logo.png" class="loginContent-img" />

          <div class="loginContent-01 mt-3 mb-3">
            <h1 class="header">Login to your account</h1>
            <br />
            <form class="loginContent-02">
              <p>
                <label>Username</label>
                <input type="text" id="username" v-model="username" />
              </p>
              <p>
                <label>Password</label>
                <input type="password" id="password" v-model="password" />
              </p>
              <p id="messageBox">
                <br />
              </p>
              <button id="button" type="button" v-on:click="login">
                Login
              </button>
              <div class="register">
                <RegisterPopup />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterPopup from '../../components/RegisterPopup.vue'

export default {
  components: { RegisterPopup },

  middleware: ['loginPageMw'],

  head() {
    return {
      title: 'USKU Analytics || Login'
    }
  },

  layout() {
    return 'loginLayout'
  },

  data() {
    return {
      username: '',
      password: ''
    }
  },

  computed: {},

  methods: {
    login() {
      if (this.username && this.password) {
        this.$store.dispatch('auth/login', {
          username: this.username,
          password: this.password
        })
      }
    }
  }
}
</script>

<style lang="scss">
body {
  background: url('../../assets/img/backgroundLogin.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;

  .login {
    height: 100vh;
    .loginContent {
      background-color: black;
      opacity: 0.8;
      border-radius: 1.5rem;
      text-align: center;
      color: var(--UskuYellow);
      width: 100vw;
      padding: 1rem;
      @media (min-width: 768px) {
        width: 40%;
      }
      input {
        color: orangered;
        padding: 5px;
        border-bottom: 1px solid #54595f;
        margin-left: 10px;
      }
      &-img {
        width: 20%;
        @media (min-width: 768px) {
          width: 15%;
        }
      }
      &-02 {
        #button {
          width: 40%;
          padding: 0.8rem;
          background-color: var(--UskuYellow);
          border-radius: 10px;
          text-align: center;
          text-transform: uppercase;
          cursor: pointer;
          font-weight: bold;
          color: black;
          &:hover {
            background-color: orangered;
            transition: 0.5s;
          }
        }
        #messageBox {
          color: orangered;
        }
        .register {
          color: var(--UskuYellow);
          width: 25%;
          margin: 20px auto;
          @media (max-width: 768px) {
            width: 35%;
          }
        }
        input:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
