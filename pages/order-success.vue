<template>
  <div class="container">
    <div class="display-1 header">
      <h1>Thank you for ordering!</h1>
    </div>
    <div>
      <h2>You order has been placed.</h2>
      <br />
      <h3>Your order will be picked up in {{ random }} days</h3>
      <br />

      <p style="color: red"><a>Cancel this order?</a></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'USKU Analytics || Order Success',
      address: '',
      random: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
      user: ''
    }
  },
  components: {}
}
</script>
<style></style>
