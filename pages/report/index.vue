<template>
  <div class="container">
    <h1 class="header" style="text-align: center; padding: 2rem">
      USKU's dashboard
    </h1>
    <div class="row">
      <dashboardChart-01 :dataProps="dataChart01"></dashboardChart-01>
    </div>

    <div class="row">
      <div class="col-md" style="text-align: center">
        <dashboardChart-02></dashboardChart-02>
      </div>
    </div>
    <div class="row">
      <div class="col-md" style="text-align: center">
        <dashboardChart-03></dashboardChart-03>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-6" style="text-align: center">
        <dashboardChart-04></dashboardChart-04>
      </div>
      <div class="col-md-6" style="text-align: center">
        <dashboardChart-05></dashboardChart-05>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-6" style="text-align: center">
        <dashboardChart-06></dashboardChart-06>
      </div>
      <div class="col-md-6" style="text-align: center">
        <dashboardChart-07></dashboardChart-07>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md" style="text-align: center">
        <dashboardChart-08></dashboardChart-08>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md" style="text-align: center">
        <dashboardChart-09></dashboardChart-09>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-6" style="text-align: center">
        <dashboardChart-10></dashboardChart-10>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md" style="text-align: center">
        <dashboardChart-11></dashboardChart-11>
      </div>
    </div>
  </div>
</template>

<script>
import dashboardChart01 from '../../components/charts/Chart01'
import dashboardChart02 from '../../components/charts/Chart02'
import dashboardChart03 from '../../components/charts/Chart03'
import dashboardChart04 from '../../components/charts/Chart04'
import dashboardChart05 from '../../components/charts/Chart05'
import dashboardChart06 from '../../components/charts/Chart06'
import dashboardChart07 from '../../components/charts/Chart07'
import dashboardChart08 from '../../components/charts/Chart08'
import dashboardChart09 from '../../components/charts/Chart09'
import dashboardChart10 from '../../components/charts/Chart10'
import dashboardChart11 from '../../components/charts/Chart11'

export default {
  head() {
    return {
      title: 'USKU Analytics || Home'
    }
  },
  data() {
    return {
      rate: 0,
      dataChart01: [300, 270, 90]
    }
  },
  components: {
    dashboardChart01,
    dashboardChart02,
    dashboardChart03,
    dashboardChart04,
    dashboardChart05,
    dashboardChart06,
    dashboardChart07,
    dashboardChart08,
    dashboardChart09,
    dashboardChart10,
    dashboardChart11
  },
  method: {
    // calculatePercent(total, success) {
    //   return (success / total) * 100 + '%'
    // }
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
