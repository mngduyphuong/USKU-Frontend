<template>
  <div>
    <footer>
      <div class="container">
        <div class="row footerContent">
          <div class="col-md footerContent01">
            <img
              class="img-fluid"
              src="../assets/img/logoFooter02.png"
              alt="#"
            />
          </div>
          <div class="col-md footerContent02">
            <div class="footerContent02-Text">
              <p>
                <nuxt-link to="/">Home</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/about/">About</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/report/">Dashboards</nuxt-link>
              </p>
            </div>
          </div>
          <div class="col-md footerContent03">
            <div class="footerContent03-Text">
              <p>
                <nuxt-link to="/order">Order</nuxt-link>
              </p>
              <p v-if="loggedIn">
                <nuxt-link to="/account">Account</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/terms">T & Cs</nuxt-link>
              </p>
            </div>
          </div>
        </div>
        <div class="row footerText">
          <div>
            <a href="https://www.swinburne.edu.au"
              >&copy; Swinburne University of Technology</a
            >
            <div class="footerMedia">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterArea',
  computed: {
    loggedIn(){
      if(this.$store.state.auth.authStatus === "authenticated"){
        return true;
      } else { return false ;}
    }
  }
}
</script>

<style lang="scss">

footer {
  background-color: black;
  color: var(--UskuYellow);
  a {
    color: var(--UskuYellow);
    text-decoration: none;
  }
  .footerContent {
    padding: 1rem;
    .footerContent01 {
      padding: 2rem;

      text-align: center;
      img {
        width: 35%;
      }
    }
    .footerContent02 {
      a {
        &:hover {
          padding: 5px 0;
          color: orangered;
          border-bottom: 1px solid orangered;
          transition: 0.5s;
        }
      }
      &-Text {
        margin-top: 1rem;
      }
    }
    .footerContent03 {
      a {
        &:hover {
          color: orangered;
          padding: 5px 0;
          border-bottom: 1px solid orangered;
          transition: 0.5s;
          text-decoration: none;
        }
      }
      &-Text {
        margin-top: 1rem;
      }
    }
  }
  .footerText {
    text-align: center;
    a {
      color: var(--UskuYellow);
      text-decoration: none;
      &:hover {
        color: orangered;
        transition: 0.5s;
      }
    }
    .footerMedia {
      padding: 0.5rem 0 1rem;
      display: flex;
      margin: auto;
      width: 20%;
      justify-content: space-between;
      @media (max-width: 768px) {
        width: 70%;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
