<template>
  <div class="container">
    <h1 class="header" style="text-align: center; padding: 2rem">
      USKU's Dashboard
    </h1>

    <!-- TODO remove these dataProps, migrate the use of charts data to component level -->

    <div class="row">
      <dashboardChart-01 :dataProps="chart1Data"></dashboardChart-01>
    </div>
    <div class="row">
      <dashboardChart-02 :dataProps="chart2Data"></dashboardChart-02>
    </div>

    <hr />
    <div class="row">
      <div class="col-md-6" style="text-align: center">
        <dashboardChart-04 :dataProps="chart4Data"></dashboardChart-04>
      </div>

      <div class="col-md-6" style="text-align: center">
        <dashboardChart-07 :dataProps="chart7aData"></dashboardChart-07>
      </div>
    </div>

    <div class="row my-5">
      <div class="col-md-6" style="text-align: center">
        <dashboardChart-06 :dataProps="chart6Data"></dashboardChart-06>
      </div>

      <div class="col-md-6" style="text-align: center">
        <dashboardChart-10 :dataProps="chart10Data"></dashboardChart-10>
      </div>
    </div>

    <div class="row my-5">
      <div class="col-md-6" style="text-align: center">
        <dashboardChart-07b :dataProps="chart7bData"></dashboardChart-07b>
      </div>

      <div class="col-md-6" style="text-align: center">
        <dashboardChart-05 :dataProps="chart5Data"></dashboardChart-05>
      </div>
    </div>

    <div class="col-md" style="text-align: center">
      <dashboardChart-09 :dataProps="chart9Data"></dashboardChart-09>
    </div>

    <div class="col-md" style="text-align: center">
      <dashboardChart-11 :dataProps="chart11Data"></dashboardChart-11>
    </div>

    <div class="col-md" style="text-align: center">
      <dashboardChart-08 :dataProps="chart8Data"></dashboardChart-08>
    </div>

    <h1 class="header" style="text-align: center; padding: 2rem">
      Prototypying
    </h1>

    <div class="row my-5">
      <div class="col-md" style="text-align: center">
        <dashboardMap></dashboardMap>
      </div>
    </div>
  </div>
</template>

<script>
import dashboardChart01 from '../../components/charts/Chart01'
import dashboardChart02 from '../../components/charts/Chart02'
import dashboardChart04 from '../../components/charts/Chart04'
import dashboardChart05 from '../../components/charts/Chart05'
import dashboardChart06 from '../../components/charts/Chart06'
import dashboardChart07 from '../../components/charts/Chart07'
import dashboardChart07b from '../../components/charts/Chart07b'
import dashboardChart08 from '../../components/charts/Chart08'
import dashboardChart09 from '../../components/charts/Chart09'
import dashboardChart10 from '../../components/charts/Chart10'
import dashboardChart11 from '../../components/charts/Chart11'
import dashboardMap from '../../components/charts/map'

import { mapActions } from 'vuex'

export default {
  head() {
    return {
      title: 'USKU Analytics || Home'
    }
  },

  methods: {
    ...mapActions({
      initDashboardData: 'dashboard/initDashboardData'
    })
  },

  data() {
    return {
      // TODO clean up as migrating the use of charts data to component level
      rate: 0,
      chart1Data: [],
      chart2Data: [],
      chart4Data: [],
      chart5Data: [],
      chart6Data: [],
      chart7aData: [],
      chart7bData: [],
      chart8Data: [],
      chart9Data: [],
      chart10Data: [],
      chart11Data: []
    }
  },

  components: {
    dashboardChart01,
    dashboardChart02,
    dashboardChart04,
    dashboardChart05,
    dashboardChart06,
    dashboardChart07,
    dashboardChart07b,
    dashboardChart08,
    dashboardChart09,
    dashboardChart10,
    dashboardChart11,
    dashboardMap
  },

  async created() {
    // TODO clean up as migrating the use of charts data to component level
    let dashboardData = this.$store.getters['dashboard/dashboardData']

    this.chart1Data = dashboardData.ordersByTier

    this.chart2Data = dashboardData.ordersByCountry

    this.chart4Data = dashboardData.ordersByCustomerSegment

    this.chart5Data = dashboardData.shippingRevByClusters

    this.chart6Data = dashboardData.customersByCustomerSegment

    // *  chart 7 uses data based on format [name, data]
    this.chart7aData[0] = 'Customers by Occupation'
    this.chart7aData[1] = dashboardData.customersByOccupation

    this.chart7bData[0] = 'Customers by Education'
    this.chart7bData[1] = dashboardData.customersByEducation

    this.chart8Data = dashboardData.ageByClusters

    this.chart9Data = dashboardData.yearlyIncome

    this.chart10Data = dashboardData.customersBySalesTerritory

    this.chart11Data = dashboardData.ordersByItemTypes
  }
}
</script>

<style lang="scss" scoped>
.chart {
  @media (max-width: 768px) {
    width: 80%;
  }
}
</style>
