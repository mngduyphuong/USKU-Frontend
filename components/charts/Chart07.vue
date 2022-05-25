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
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import VChart from 'vue-echarts'

use([
  CanvasRenderer,
  PieChart,
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
        // color: ['#118dff', '#12239e', '#e66c37', '#6b007b', '#e044a7'],
        color: [
          '#a0d1e1',
          '#a0a7d8',
          '#f5c4af',
          '#c499ca',
          '#f3b4dc',
          '#3257a8'
        ],
        title: {
          text: this.dataProps[0],
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: 'right'
        },
        series: [
          {
            name: 'Customer keys',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '60%'],
            data: [],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
      this.getCustomersByOccupationData()
      // this.getCustomersByEducationData()
    },
    getCustomersByOccupationData() {
      // TODO reformat with the use of Vuex actions
      this.$axios
        .$get('api/customers_by_occupation/')
        .then((response) => {
          // console.log(response.data)
          this.option.series[0].data = response.data
          // commit('updateCustomersByOccupationData', response.data)
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
