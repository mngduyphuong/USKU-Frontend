<template>
  <v-chart class="chart" :option="option" autoresize />
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
          text: 'Count of customer key by gender and marital-status',
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
            min: 0,
            max: 6,
            interval: 2,
            axisLabel: {
              formatter: '{value}K'
            }
          }
        ],
        series: [
          {
            name: 'Customers',
            type: 'bar',
            barWidth: '60%',
            data: [5.2, 4.8, 4.4, 4.0],
            formatter: '{value}K'
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
