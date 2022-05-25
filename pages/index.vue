<template>
  <div class="container">
    <div class="py-5">
      <swiper></swiper>
    </div>
    <hr />
    <h1 class="py-5" style="text-align: center">Why choose us?</h1>
    <div
      class="section02"
      style="display: flex; justify-content: center; padding-top: 2rem"
    >
      <div class="section02-content">
        <div class="row">
          <i class="fas fa-thumbs-up fa-4x col-md-2 mx-auto my-auto"></i>
          <div class="section02-content-detail col-md-10">
            <h3 class="header">Premium Service</h3>
            <p>
              Our drivers are professional and friendly. Customer service and
              hotline are 24/7. This will increase the experiences of your
              purchase.
            </p>
          </div>
        </div>

        <div class="row">
          <i class="fas fa-truck fa-4x col-md-2 my-auto mx-auto"></i>
          <div class="section02-content-detail col-md-10">
            <h3 class="header">Fast Shipping</h3>
            <p>
              We make sure you recieve your order as soon as the restaurant have
              finished making it. We also provide free returns if you are not
              satisfied.
            </p>
          </div>
        </div>

        <div class="row">
          <i class="fas fa-battery-full fa-4x col-md-2 my-auto mx-auto"></i>
          <div class="section02-content-detail col-md-10">
            <h3 class="header">Quality Assurance</h3>
            <p>
              For every purchase you make, we will ensure there are no damages
              or faults.
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div style="text-align: center" class="section03">
      <h2 class="py-5">Spend less on deliveries</h2>
      <div class="row">
        <div v-for="price in pricing" :key="price.id" class="col-md-4">
          <div>
            <PriceCard :pricing="price"></PriceCard>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
import swiper from '../components/swiper'
import PriceCard from '../components/PriceCard.vue'
import { mapState, mapActions } from 'vuex'

export default {
  head() {
    return {
      title: 'USKU Analytics || Home'
    }
  },
  data() {
    return {
      pricing: [
        {
          name: 'test',
          subname: 'test item description',
          price: 10,
          description: 'Lorem ipsum dolor sit.',
          description1: 'Lorem ipsum dolor sit.',
          description2: 'Lorem ipsum dolor sit.',
          description3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          name: 'test01',
          subname: 'test item description',
          price: 20,
          description: 'Lorem ipsum dolor sit.',
          description1: 'Lorem ipsum dolor sit.',
          description2: 'Lorem ipsum dolor sit.',
          description3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          name: 'test02',
          subname: 'test item description',
          price: 350,
          description: 'Lorem ipsum dolor sit.',
          description1: 'Lorem ipsum dolor sit.',
          description2: 'Lorem ipsum dolor sit.',
          description3:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
      ]
    }
  },
  methods: {
    // ...mapActions({
    //   initDashboardData: 'dashboard/initDashboardData'
    // })
  },

  components: {
    swiper,
    PriceCard
  },

  mounted() {
    let yourScript = document.createElement('script')
    yourScript.setAttribute('src', 'https://kit.fontawesome.com/b99e675b6e.js')
    document.head.appendChild(yourScript)
    // this.$store.dispatch('pricing/loadPricings')
  },

  computed: {
    // ...mapState({
    //   pricing: (state) => state.pricing.pricings.pricing
    // })
  }
}
</script>
<style lang="scss" scoped>
.section02 {
  &-content {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
      i {
        display: flex;
        justify-content: center;
      }
    }
    &-detail {
      padding-left: 2rem;
    }
  }
}
</style>
