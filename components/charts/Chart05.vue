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
        color: ['#c9e7dc', '#92d0b9', '#59937e'],
        title: {
          text: 'Revenue from shipping costs by cluster and shipping type',
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
          data: ['Shipping type 1', 'Shipping type 2', 'Shipping type 3'],
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
          max: 20,
          interval: 5,
          axisLabel: {
            formatter: '{value}K'
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
            name: 'Shipping type 1',
            type: 'bar',
            data: [17.5, 13, 13, 13]
          },
          {
            name: 'Shipping type 2',
            type: 'bar',
            data: [13, 13, 13, 13]
          },
          {
            name: 'Shipping type 3',
            type: 'bar',
            data: [15.5, 13, 13, 13]
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
