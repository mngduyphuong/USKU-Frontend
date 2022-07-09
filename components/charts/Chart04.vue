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
        color: ['#414fb1', '#f7d0bf', '#f2c3c7', '#9ec3e5'],
        title: {
          text: 'Number of Orders by Clusters',
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
          data: ['Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4'],
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
          data: ['Clusters'],
          axisPointer: {
            type: 'shadow'
          }
        },
        series: [
          {
            name: 'Cluster 1',
            type: 'bar',
            data: [17.5]
          },
          {
            name: 'Cluster 2',
            type: 'bar',
            data: [13]
          },
          {
            name: 'Cluster 3',
            type: 'bar',
            data: [15.5]
          },
          {
            name: 'Cluster 4',
            type: 'bar',
            data: [12]
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
