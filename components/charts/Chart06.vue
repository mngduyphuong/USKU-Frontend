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
import { BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart from 'vue-echarts'

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        title: {
          text: 'Customers by Gender and Marital-status',
          left: 'left'
        },
        yAxis: [
          {
            type: 'category',
            name: 'Gender, Marital status',
            data: ['M Married', 'F Married', 'M Single', 'F Single'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        xAxis: [
          {
            type: 'value',
            // name: 'Number of customers',
            min: 0,
            max: 6000,
            interval: 2000,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: 'Customers',
            type: 'bar',
            barWidth: '60%',
            data: [],

            formatter: '{value}'
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
      this.getOrdersCustomerSegmentData()
    },
    getOrdersCustomerSegmentData() {
      // TODO reformat with the use of Vuex actions
      this.$axios
        .$get('api/customer_segmentation/')
        .then((response) => {
          // console.log(response.data.customers)
          // ?  transform response data into processed array following format [MM, MF, SM, SF]
          let processedCustomerData = []
          processedCustomerData.push(response.data.customers.marriedmale)
          processedCustomerData.push(response.data.customers.marriedfemale)
          processedCustomerData.push(response.data.customers.singlemale)
          processedCustomerData.push(response.data.customers.singlefemale)
          this.option.series[0].data = processedCustomerData
          this.loading = false
        })
        .catch(alert)
    }
  }
}
</script>

<style scoped>
.chart {
  height: 400px;
  width: 100%;
}
</style>
