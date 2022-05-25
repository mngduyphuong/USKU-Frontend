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
        color: ['#414fb1', '#f7d0bf', '#f2c3c7', '#9ec3e5'],
        title: {
          text: 'Number of Orders by Clusters',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          data: ['Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4'],
          bottom: 'bottom'
        },
        grid: {
          top: '20%',
          bottom: '20%',
          containLabel: true
        },
        yAxis: {
          type: 'value',
          name: 'Orders',
          min: 0,
          max: 6000,
          interval: 2000,
          axisLabel: {
            formatter: '{value}'
          }
        },
        xAxis: {
          type: 'category',
          data: ['Clusters'],
          axisPointer: {
            type: 'shadow'
          }
        },
        series: []
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
          // ?  transform response data into processed array following format [[MM], [MF], [SM], [SF]]
          let processedOrdersData = []
          processedOrdersData.push(response.data.orders.marriedmale)
          processedOrdersData.push(response.data.orders.marriedfemale)
          processedOrdersData.push(response.data.orders.singlemale)
          processedOrdersData.push(response.data.orders.singlefemale)

          this.option.series = [
            {
              name: 'Cluster 1',
              type: 'bar',
              data: [processedOrdersData[0]]
            },
            {
              name: 'Cluster 2',
              type: 'bar',
              data: [processedOrdersData[1]]
            },
            {
              name: 'Cluster 3',
              type: 'bar',
              data: [processedOrdersData[2]]
            },
            {
              name: 'Cluster 4',
              type: 'bar',
              data: [processedOrdersData[3]]
            }
          ]
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
