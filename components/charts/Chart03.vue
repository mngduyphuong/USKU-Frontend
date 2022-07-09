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
        color: ['#ffba00', '#FF5349'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        title: {
          text: 'Users vs Profit',
          left: 'center'
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true }
          }
        },
        legend: {
          data: ['Users', 'Profit'],
          top: '10%'
        },
        grid: {
          top: '30%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['2010', '2011', '2012', '2013']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Number of users',
            min: 0,
            max: 20000,
            interval: 5000,
            axisLabel: {
              formatter: '{value} users'
            }
          },
          {
            type: 'value',
            name: 'Total revenue',
            min: 0,
            max: 2,
            interval: 0.5,
            axisLabel: {
              formatter: '{value}$M'
            }
          }
        ],
        series: [
          {
            name: 'Users',
            type: 'bar',
            data: [14, 2216, 3225, 12523]
          },
          {
            name: 'Profit',
            type: 'line',
            yAxisIndex: 1,
            data: [0.1, 0.5, 0.8, 1.3]
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
