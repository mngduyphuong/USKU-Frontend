<template>
  <div>
    <div v-if="!loading" class="row">
      <div class="col-md">
        <v-chart class="chart" :option="option" autoresize />
      </div>
    </div>

    <div
      v-else
      class="d-flex justify-content-center align-items-center chart"
      style="margin: auto"
    >
      <div class="spinner-border text-warning" role="status"></div>
    </div>
  </div>
</template>

<script>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import 'echarts/lib/component/toolbox'

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
])

export default {
  name: 'HelloWorld',
  components: {
    VChart
  },

  data() {
    return {
      loading: true,
      option: {
        color: ['#414fb1', '#9ec3e5'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        title: {
          text: 'Count of Customer Key by Sales Territory Key',
          left: 'center'
        },
        // legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            // data: this.dataProps[0]
            data: []
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Count of Customer',
            min: 0,
            max: 5000,
            interval: 1000,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: 'Male',
            type: 'bar',
            stack: 'abc',
            emphasis: {
              focus: 'series'
            },
            data: []
          },
          {
            name: 'Female',
            type: 'bar',
            stack: 'abc',
            emphasis: {
              focus: 'series'
            },
            data: []
          }
        ]
      }
    }
  },
  created() {
    this.initData()
  },

  props: {
    dataProps: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    initData() {
      this.loading = true
      this.getCustomersBySalesTerritoryData()
    },
    getCustomersBySalesTerritoryData() {
      // TODO reformat with the use of Vuex actions
      this.$axios
        .$get('api/customer_by_sales_territory/')
        .then((response) => {
          console.log(response)
          let processedData = []
          let salesTerritoryKeys = []
          // * sales territory key list of male is the same as female's
          response.data.male.forEach((element) => {
            salesTerritoryKeys.push(element.salesterritoryregion)
          })
          processedData.push(salesTerritoryKeys)

          let maleData = []
          response.data.male.forEach((element) => {
            maleData.push(element.value)
          })
          processedData.push(maleData)

          let femaleData = []
          response.data.female.forEach((element) => {
            femaleData.push(element.value)
          })
          processedData.push(femaleData)
          this.option.series[1].data = femaleData
          this.option.series[0].data = maleData
          this.option.xAxis[0].data = salesTerritoryKeys
          this.loading = false
        })
        .catch(alert)
    }
  }
}
</script>

<style scoped>
.chart {
  height: 500px;
  width: 100%;
}
</style>
