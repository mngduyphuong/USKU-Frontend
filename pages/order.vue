<template>
  <div class="container">
    <h1 class="header">Place an order</h1>
    <div style="padding-top: 1rem">
      <v-form ref="form">
        <div class="row">
          <div class="col-md-6 py-0">
            <v-text-field
              class="textfield"
              v-model="name"
              :counter="100"
              :rules="nameRules"
              label="Sender's Name"
            >
            </v-text-field>
          </div>
          <div class="col-md-6 py-0">
            <v-text-field
              class="textfield"
              v-model="email"
              :rules="emailRules"
              label="Sender's Email"
            >
            </v-text-field>
          </div>
          <div class="col-md-6 py-0">
            <v-text-field
              class="textfield"
              v-model="address"
              :counter="100"
              :rules="addressRules"
              label="Pickup Address"
            >
            </v-text-field>
          </div>
          <div class="col-md-6 py-0">
            <v-text-field
              class="textfield"
              v-model="description"
              :counter="250"
              :rules="descRules"
              label="Item Description"
            >
            </v-text-field>
          </div>
          <div class="col-md-6">
            <v-row>
              <v-text-field
                class="textfielddim"
                v-model="itemWe"
                :rules="item"
                type="number"
                label="Item Weight"
              >
              </v-text-field>
              <v-text-field
                class="textfielddim"
                v-model="itemW"
                :rules="item"
                type="number"
                label="Item Width"
              >
              </v-text-field>
            </v-row>
          </div>

          <div class="col-md-6">
            <v-row>
              <v-text-field
                class="textfielddim"
                v-model="itemH"
                :rules="item"
                type="number"
                label="Item Height"
              >
              </v-text-field>
              <v-text-field
                class="textfielddim"
                v-model="itemD"
                :rules="item"
                type="number"
                label="Item Depth"
              >
              </v-text-field
            ></v-row>
          </div>
          <div class="col-md-6 py-0">
            <v-text-field
              class="textfield"
              v-model="receiverName"
              :counter="100"
              :rules="nameRules"
              label="Receiver's Name"
            >
            </v-text-field>
          </div>

          <div class="col-md-6 py-0">
            <v-text-field
              class="textfield"
              v-model="receiverAddress"
              :counter="100"
              :rules="addressRules"
              label="Receiver's Address"
            >
            </v-text-field>
          </div>
        </div>
        <v-radio-group v-model="radioGroup">
          <v-radio
            v-for="price in pricing"
            :key="price.id"
            :label="`${price.name} - $${price.price}`"
            :value="`${price.price}`"
          ></v-radio>
        </v-radio-group>
        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue']"
          required
        >
          <template v-slot:label>
            <div>
              I agree to the
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <a href="/terms" @click.stop v-on="on" target="_blank">
                    terms & conditions
                  </a>
                </template>
                Opens in new window
              </v-tooltip>
            </div>
          </template>
        </v-checkbox>
        <v-btn :disabled="valid" class="vbtn" @click="postNewOrder">
          Submit
        </v-btn>
        <v-btn class="vbtn" @click="reset"> Reset Form </v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 100) || 'Name must be less than 100 characters'
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    address: '',
    addressRules: [
      (v) => !!v || 'Address is required',
      (v) =>
        (v && v.length <= 100) || 'Address must be less than 100 characters'
    ],
    // descRules: '',
    descRules: [
      (v) => !!v || 'Item description is required',
      (v) =>
        (v && v.length <= 100) || 'Description must be less than 250 characters'
    ],
    itemWe: '',
    itemW: '',
    itemH: '',
    itemD: '',
    item: [(v) => !!v || 'Item specification is required'],
    receiverName: '',
    receiverAddress: '',
    checkbox: false,
    description: '',
    radioGroup: [{ value: '', label: '' }]
  }),

  head() {
    return {
      title: 'USKU Analytics || Order'
    }
  },

  middleware: ['authMw'],

  mounted() {
    let yourScript = document.createElement('script')
    yourScript.setAttribute('src', 'https://kit.fontawesome.com/b99e675b6e.js')
    document.head.appendChild(yourScript)
  },

  methods: {
    reset() {
      this.$refs.form.resetValidation(), this.$refs.form.reset()
    },

    // *  create new order via POST request
    postNewOrder() {
      // *  calculate the shipping type based on chosen shipping price
      let shippingType = null
      if (this.radioGroup == '19.99') {
        shippingType = 3
      } else if (this.radioGroup == '12.99') {
        shippingType = 2
      } else {
        shippingType = 1
      }

      localStorage.setItem('address', this.address);
      localStorage.setItem('name', this.name);

      // *  POST data in api accepted format
      let payload = {
        sender_name: this.name,
        sender_email: this.email,
        pickup_address: this.address,
        item_description: this.description,
        item_weight: this.itemWe,
        item_width: this.itemW,
        item_height: this.itemH,
        item_depth: this.itemD,
        shipping_type: shippingType,
        shipping_price: this.radioGroup,
        receivers_name: this.receiverName,
        receivers_address: this.receiverAddress
      }

      // *  if create new order successfully, navigate to order-success page
      this.$authorizedAPI
        .post('/api/create_new_order/', payload)
        .then((res) => console.info(res))
        .then(() => {
          this.$router.push('/order-success')
        })
        .catch(alert)
    }
  },

  computed: {
    ...mapState({
      pricing: (state) => state.pricing.pricings.pricing
    })
  }
}
</script>
<style>
.textfielddim {
  width: 50%;
}
#terms {
  color: grey;
}
</style>
