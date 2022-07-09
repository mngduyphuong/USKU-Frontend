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
          text: 'Count of customer key by occupation',
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
            radius: '70%',
            center: ['50%', '50%'],
            data: [
              { value: 9, name: 'Bachelors' },
              { value: 8, name: 'Graduate Degree' },
              { value: 6, name: 'High School' },
              { value: 4, name: 'Master' },
              { value: 2, name: 'Partial College' },
              { value: 2, name: 'Partial High School' }
            ],
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
