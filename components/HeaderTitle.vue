<template>
  <nav class="headerMain">
    <div class="container">
      <div class="row" style="padding: 1rem">
        <div class="headerLogo col-md-2">
          <nuxt-link to="/"
            ><img class="img-fluid" src="../assets/img/logo.png" alt="#"
          /></nuxt-link>
        </div>
        <div class="headerMenu col-md-10">
          <ul>
            <li class="mainMenu">
              <nuxt-link to="/"> Home</nuxt-link>
            </li>
            <li v-if="isSuperuser" class="mainMenu">
              <nuxt-link to="/report"> Dashboards</nuxt-link>
            </li>
            <li class="mainMenu">
              <nuxt-link to="/about"> About</nuxt-link>
            </li>
            <li class="mainMenu">
              <nuxt-link to="/order"> Place An Order</nuxt-link>
            </li>
            <li v-if="loggedIn" class="headerMenu-login mainMenu">
              <nuxt-link to="/account">
                <i class="fas fa-address-card"></i>Account</nuxt-link
              >
            </li>
            <li v-else class="mainMenu">
              <nuxt-link to="/login"> Login / Register</nuxt-link>
            </li>
            <li v-if="loggedIn" class="mainMenu">
              <button v-on:click="logout">
                <i class="fas fa-sign-out-alt" style="margin-right: 0.5rem"></i
                >Logout
              </button>
            </li>
            <li>
              <nav class="navbar navbar-dark bg-black sideButton">
                <div>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                </div>
              </nav>
            </li>
          </ul>
        </div>
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="sideMenu">
            <ul>
              <li>
                <nuxt-link to="/"> Home</nuxt-link>
              </li>
              <li v-if="isSuperuser">
                <nuxt-link to="/report"> Dashboards</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about"> About</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/order"> Place An Order</nuxt-link>
              </li>
              <li v-if="loggedIn" class="sideMenu-login">
                <nuxt-link to="/account">
                  <i class="fas fa-address-card"></i>Account</nuxt-link
                >
              </li>
              <li v-else class="mainMenu">
                <nuxt-link to="/login"> Login / Register</nuxt-link>
              </li>
              <li v-if="loggedIn" class="mainMenu">
                <button v-on:click="logout">
                  <i
                    class="fas fa-sign-out-alt"
                    style="margin-right: 0.5rem"
                  ></i
                  >Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HearderTitle',

  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  },

  computed: {
    loggedIn() {
      if (this.$store.state.auth.authStatus === 'authenticated') {
        return true
      } else {
        return false
      }
    },

    isSuperuser() {
      // *  kinda overkill, quick workaround as computed doesn't work properly regarding cookies
      // ?  should've return a promise to wrap up, will be updated later
      if (this.$store.state.auth.authStatus === 'authenticated') {
        //database not available so if logged in enable to use superuser function
        return true
      } else {
        if (this.$cookies.get('uskuIsSuperuser')) {
          return true
        }
        return false
      }
    }
  }
}
</script>

<style lang="scss">
.headerMain {
  background-color: black;
  background-size: cover;
  color: var(--UskuYellow);
  font-size: 1.1rem;
  position: relative;
  .headerLogo {
    text-align: center;

    @media (max-width: 768px) {
      width: 50%;
      img {
        width: 50%;
      }
    }
  }
  .headerMenu {
    margin: auto 0;
    position: relative;
    @media (max-width: 768px) {
      width: 50%;
      right: 0;
    }
    ul {
      display: flex;
      justify-content: flex-end;
      list-style: none;
      margin: auto 0px;

      li {
        padding: 0 1.5rem;
        margin: auto 0px;
        a {
          text-decoration: none;
          color: var(--UskuYellow);
          &:hover {
            color: orangered;
            border-bottom: 1px solid orangered;
            transition: 0.5s;
            padding-bottom: 5px;
          }
        }
      }
      .headerMenu-login {
        background-color: var(--UskuYellow);
        padding: 10px 20px;
        border-radius: 10px;
        a {
          color: black;
          i {
            margin-right: 1rem;
          }
          &:hover {
            border: none;
            color: orangered;
            transition: 0.5s;
          }
        }
      }
      .sideButton {
        @media (min-width: 768px) {
          display: none;
        }
      }
      .mainMenu {
        @media (max-width: 768px) {
          display: none;
        }
        button {
          color: var(--UskuYellow);
          &:hover {
            color: orangered;
            transition: 0.5s;
          }
        }
      }
    }
  }
  .sideMenu {
    @media (min-width: 768px) {
      display: none;
    }
    ul {
      list-style: none;
      text-align: center;
      font-size: 1.2rem;
      li {
        padding: 0.5rem;
        a {
          text-decoration: none;
        }
      }
      .sideMenu-login {
        background-color: var(--UskuYellow);
        padding: 10px 20px;
        margin: auto;
        margin-top: 0.5rem;
        border-radius: 10px;
        width: 60%;
        a {
          color: black;
          i {
            margin-right: 1rem;
          }
        }
      }
    }
  }
}
</style>
