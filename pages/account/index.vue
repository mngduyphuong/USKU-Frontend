<template>
  <div class="container">
    <h1 class="header" style="text-align: center; padding: 2rem">
      Account Information
    </h1>
    <v-form>
      <div class="row">
        <div class="col-md-6">
          <h3 class="header">Personal information</h3>
          <v-text-field
            color="#54595f"
            label="First Name"
            v-model="accountInfo.firstName"
            class="inputVue"
          ></v-text-field>
          <v-text-field
            color="#54595f"
            label="Last Name"
            v-model="accountInfo.lastName"
            class="inputVue"
          ></v-text-field>
          <!-- <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="BirthDate"
                label="Date of birth"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                class="inputVue"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="BirthDate"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu> -->
          <v-text-field
            color="#54595f"
            label="Date of birth"
            v-model="accountInfo.birthDate"
            hint="yyyy-mm-dd"
          ></v-text-field>

          <p>Marital Status:</p>
          <v-radio-group v-model="accountInfo.maritalStatus" row>
            <v-radio label="Single" value="S"></v-radio>
            <v-radio label="Married" value="M"></v-radio>
          </v-radio-group>

          <p>Gender:</p>
          <v-radio-group v-model="accountInfo.gender" row>
            <v-radio label="Male" value="M"></v-radio>
            <v-radio label="Female" value="F"></v-radio>
            <v-radio label="I prefer not to say" value=""></v-radio>
          </v-radio-group>
        </div>
        <div class="col-md-6">
          <h3 class="header">Additional information</h3>
          <v-text-field
            color="#54595f"
            label="Yearly Income"
            v-model="accountInfo.yearlyIncome"
            class="inputVue"
          ></v-text-field>
          <v-text-field
            color="#54595f"
            label="Total Children"
            v-model="accountInfo.totalChildren"
            class="inputVue"
            type="number"
            min="0"
          ></v-text-field>
          <v-text-field
            color="#54595f"
            label="Number Children At Home"
            v-model="accountInfo.numberChildrenAtHome"
            class="inputVue"
            type="number"
            min="0"
          ></v-text-field>
          <v-text-field
            color="#54595f"
            label="Education"
            v-model="accountInfo.education"
            class="inputVue"
          ></v-text-field>
          <v-text-field
            color="#54595f"
            label="Occupation"
            v-model="accountInfo.occupation"
            class="inputVue"
          ></v-text-field>
          <v-text-field
            color="#54595f"
            label="House Owner Flag"
            v-model="accountInfo.houseOwnerFlag"
            class="inputVue"
            type="number"
            min="0"
          ></v-text-field>
          <v-text-field
            color="#54595f"
            label="Number Cars Owned"
            v-model="accountInfo.numberCarsOwned"
            class="inputVue"
            type="number"
            min="0"
          ></v-text-field>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-md-4 offset-md-4" style="text-align: center">
          <h3 class="header">Address information</h3>
          <v-text-field
            color="#54595f"
            label="Address Line 1"
            v-model="accountInfo.addressLine1"
          ></v-text-field>
          <v-text-field
            color="#54595f"
            label="Address Line 2"
            v-model="accountInfo.addressLine2"
          ></v-text-field>
          <!-- <v-select :items="GeographyKey" label="Geography Key"></v-select> -->
          <!-- datefirstpurchase is not included atm -->
          <v-text-field
            color="#54595f"
            label="Commute Distance"
            v-model="accountInfo.commuteDistance"
          ></v-text-field>
        </div>
      </div>
      <div class="row">
        <div style="text-align: center">
          <v-btn class="vbtn"> Submit </v-btn>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: 'USKU Analytics || Account'
    }
  },

  methods: {
    ...mapActions({
      initAccountInfo: 'account/getCurrentAccountInfo'
    })
  },

  async created() {
    // ?  if the logged account info data is not initialised, its isSuperuser field will be null
    if (this.$store.getters['account/accountInfo'].isSuperuser == null) {
      // *  get current account info from backend if not mapped in Vuex store
      await this.initAccountInfo()
    }
    // *  map account info using data initialised in Vuex store module
    this.accountInfo = this.$store.getters['account/accountInfo']
  },

  data() {
    return {
      accountInfo: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.inputVue {
  color: #54595f;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
>
