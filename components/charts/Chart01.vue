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
      dataTable: [],
      option: {
        color: ['#ffba00', '#FF5349', ' #0000FF'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['Free', 'Premium', 'Pro']
        },
        grid: {
          top: '10%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['USKU orders']
        }
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
  // watch: {
  //   dataProps: function (newVal, oldVal) {
  //     console.log('Prop changed: ', newVal, ' | was: ', oldVal)
  //   }
  // },
  methods: {
    async initData() {
      this.loading = true
      await this.getOrdersByTierData()
      // console.log('loading')

      // if (this.dataProps.length > 0) this.loading = false
    },
    async getOrdersByTierData() {
      // TODO reformat with the use of Vuex actions
      this.$axios
        .$get('api/orders_by_tier/')
        .then((response) => {
          // * response data contain 3 json object
          let processedData = []
          processedData.push(response.data[0].total)
          processedData.push(response.data[1].total)
          processedData.push(response.data[2].total)
          this.dataTable = processedData
          this.option.series = [
            {
              name: 'Free',
              type: 'bar',
              data: [this.dataTable[0]]
            },
            {
              name: 'Premium',
              type: 'bar',
              data: [this.dataTable[1]]
            },
            {
              name: 'Pro',
              type: 'bar',
              data: [this.dataTable[2]]
            }
          ]
          console.log('finish')
          this.loading = false
        })
        .catch(alert)
    }
  }
}
</script>

<style scoped>
.chart {
  height: 200px;
  width: 100%;
}
</style>
