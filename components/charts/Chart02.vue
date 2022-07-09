<template>
  <div>
    <v-chart class="chart" :option="option" />
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
// eslint-disable-next-line no-unused-vars
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'
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
  methods: {
    ...mapActions({
      getChart1Data: 'dashboard/getSalesByCountryData'
    })
  },

  data() {
    return {
      chart1Data: {},
      option: {
        title: {
          text: 'Total orders by geography',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          bottom: 'bottom'
        },
        series: [
          {
            name: 'Number of orders',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: [
              { value: 132, name: 'New South Wales' },
              { value: 67, name: 'Queensland' },
              { value: 95, name: 'South Australia' },
              { value: 48, name: 'Tasmania' },
              { value: 41, name: 'Victoria' },
              { value: 200, name: 'International' }
            ],
            // data: this.chart1Data,
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
  }
}
</script>

<style scoped>
.chart {
  height: 400px;
  width: 100%;
}
</style>
