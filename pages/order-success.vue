<template>
  <div class="container">
    <div class="display-1 header">
      <h1>Thank you {{user}}!</h1>
    </div>
    <div>
      <h2>
        You order has been placed.
      </h2>
      <br />
      <h3>Your order will be picked up in {{random}} days</h3>
      <br />
      <dashboardMap/>
      <p><a>Cancel this order?</a></p>
    </div>
  </div>
</template>
<script>
import dashboardMap from '/components/charts/map'
export default {
  head() {
    return {
      title: 'USKU Analytics || Order Success',
      address: "",
      random: 5,
      user: "",
    }
  },
  mounted() {
    let yourScript = document.createElement('script')
    yourScript.setAttribute('src', 'https://kit.fontawesome.com/b99e675b6e.js')
    document.head.appendChild(yourScript)
    this.address = localStorage.getItem('address');
    this.user = localStorage.getItem('name');
    this.random = Math.floor(Math.random() * (10 - 1 + 1)) + 1
  },
  components: {
      dashboardMap,
  }
}
</script>
<style></style>
