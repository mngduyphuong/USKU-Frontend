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
        color: ['#414fb1', '#9ec3e5', '#f7d0bf'],
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
          text: 'Min/Max/Average of yearly income by cluster',
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
          data: [
            'Min of yearly income',
            'Max of yearly income',
            'Average of yearlyincome'
          ],
          top: '10%'
        },
        grid: {
          top: '30%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Yearly Income',
            min: 0,
            max: 0.2,
            interval: 0.1,
            axisLabel: {
              formatter: '{value}M'
            }
          }
        ],
        series: [
          {
            name: 'Min of yearly income',
            type: 'bar',
            data: [0.01, 0.02, 0.02, 0.02]
          },
          {
            name: 'Max of yearly income',
            type: 'bar',
            data: [0.18, 0.18, 0.18, 0.18]
          },
          {
            name: 'Average of yearlyincome',
            type: 'line',
            data: [0.09, 0.09, 0.09, 0.09]
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
