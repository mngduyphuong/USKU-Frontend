<template>
  <div>
    <v-chart class="chart" :option="option" autoresize />
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
      option: {
        color: ['#414fb1', '#9ec3e5'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        title: {
          text: 'Count of customerkey by salesterritorykey',
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
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Customer keys',
            min: 0,
            max: 5,
            interval: 1,
            axisLabel: {
              formatter: '{value}K'
            }
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            stack: 'abc',
            emphasis: {
              focus: 'series'
            },
            data: [0, 1, 0.5, 0.5, 1.5, 0.5, 0.5, 1, 1, 1, 1.5, 0.5]
          },
          {
            name: 'Email',
            type: 'bar',
            stack: 'abc',
            emphasis: {
              focus: 'series'
            },
            data: [0, 2, 0, 0, 3, 0, 0.6, 2, 2.3, 2.4, 2, 1.5]
          }
        ]
      }
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
