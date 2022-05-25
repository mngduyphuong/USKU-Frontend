<template>
  <v-app>
    <div>
      <HeaderTitle />
      <div class="container">
        <div class="row">
          <div class="col-md mainContent">
            <Nuxt />
          </div>
        </div>
      </div>
      <FooterArea />
    </div>
  </v-app>
</template>

<script>
import HeaderTitle from '../components/HeaderTitle'
import FooterArea from '../components/FooterArea'

export default {
  components: {
    HeaderTitle,
    FooterArea
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@500;700;900&display=swap'
      },
      //adding boostrap lib
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
        integrity:
          'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
        crossorigin: 'anonymous'
      }
    ]
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@500;700;900&display=swap');

:root {
  --UskuYellow: #ffba00;
  --backgroundColor: #efeff0;
  --TextColour: #54595f;
  --AccentBlue: #4054b2;
  --AccentGreen: #61ce70;
}

html {
  font-family: 'Inter', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /* style for website   */
  background-color: var(--backgroundColor);
}

a,
a:visited {
  color: var(--UskuYellow);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.container {
  color: var(--TextColour);
  font-family: 'Inter', sans-serif;
  padding-top: 0;

  .mainContent {
    padding-top: 3rem;
    padding-bottom: 3rem;
    font-size: 1.2rem;
  }
}
.header {
  color: var(--UskuYellow);
  font-family: 'Montserrat', sans-serif;
}

.vbtn {
  background-color: var(--UskuYellow) !important;
}
</style>
