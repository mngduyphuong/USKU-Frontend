<template>
  <div class="container">
    <div class="row">
      <v-chart class="chart" :option="option" autoresize />
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
      option: {
        color: ['#808080', '#59937e', '#5b79b9', '#a6505f'],
        title: {
          text: 'Orders by item types and clusters',
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
          data: ['Shipping type 1', 'Shipping type 2', 'Shipping type  3'],
          bottom: 'bottom'
        },
        grid: {
          top: '20%',
          bottom: '20%',
          containLabel: true
        },
        yAxis: {
          type: 'value',
          name: 'Number of orders',
          min: 0,
          max: 1200,
          interval: 500,
          axisLabel: {
            formatter: '{value}'
          }
        },
        xAxis: {
          type: 'category',
          data: ['Clusters1', 'Clusters2', 'Clusters3', 'Clusters4'],
          axisPointer: {
            type: 'shadow'
          }
        },
        series: [
          {
            name: 'Components',
            type: 'bar',
            data: [1000, 1300, 800, 600]
          },
          {
            name: 'Clothing',
            type: 'bar',
            data: [1000, 1300, 800, 600]
          },
          {
            name: 'Bikes',
            type: 'bar',
            data: [1000, 1300, 800, 600]
          },
          {
            name: 'Accessories',
            type: 'bar',
            data: [1000, 1300, 800, 600]
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
