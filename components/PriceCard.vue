<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-title primary-title class="justify-center">
      <h3 class="header">{{ pricing.name }}</h3>
    </v-card-title>

    <p class="text-center vrow" style="height: 5rem; margin: auto">
      {{ pricing.subname }}
    </p>
    <v-row>
      <p class="text-center" style="margin-top: 1rem">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-send"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#9e9e9e"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="10" y1="14" x2="21" y2="3" />
          <path
            d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"
          />
        </svg>
        <b>${{ pricing.price }} AUD</b>
      </p>
    </v-row>
    <v-row class="vrow">
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-check"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffba00"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
        {{ pricing.description }}
      </p>
    </v-row>
    <v-row class="vrow">
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-check"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffba00"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
        {{ pricing.description1 }}
      </p>
    </v-row>
    <v-row class="vrow">
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-check"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffba00"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
        {{ pricing.description2 }}
      </p>
    </v-row>
    <v-row class="vrow">
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-check"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffba00"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
        {{ pricing.description3 }}
      </p>
    </v-row>
    <div class="ss">
      <nuxt-link to="/order"
        ><v-btn class="vbtn" id="pricecardbtn" href="/order"
          >Place an order</v-btn
        ></nuxt-link
      >
    </div>
  </v-card>
</template>

<script>
export default {
  props: ['pricing']
}
</script>

<style scoped>
.vrow {
  padding: 0 2rem;
}

.ss {
  text-align: center;
}

#pricecardbtn {
  margin: 1rem 0;
}
</style>
