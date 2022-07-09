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
const cluster1 = [],
  cluster2 = [],
  cluster3 = [],
  cluster4 = []
const age = []
for (let i = 1; i < 120; i++) {
  cluster1.push(Math.floor(Math.random() * 200))
  cluster2.push(Math.floor(Math.random() * 200))
  cluster3.push(Math.floor(Math.random() * 200))
  cluster4.push(Math.floor(Math.random() * 200))
  age.push(i)
}
export default {
  name: 'HelloWorld',
  components: {
    VChart
  },
  data() {
    return {
      option: {
        title: {
          text: 'Count of customerkey by age and cluster',
          left: 'center'
        },
        color: ['#a0d1e1', '#a0a7d8', '#f5c4af', '#c499ca'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4'],
          bottom: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: age
            // type: 'value',
            // name: 'Customer Key',
            // min: 0,
            // max: 120,
            // interval: 20,
            // axisLabel: {
            //   formatter: '{value}'
            // }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Customer Key',
            min: 0,
            max: 800,
            interval: 200,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: 'Cluster 1',
            type: 'bar',
            areaStyle: {},
            stack: 'Total',
            data: cluster1
          },
          {
            name: 'Cluster 2',
            type: 'bar',
            areaStyle: {},
            stack: 'Total',
            data: cluster2
          },
          {
            name: 'Cluster 3',
            type: 'bar',
            areaStyle: {},
            stack: 'Total',
            data: cluster3
          },
          {
            name: 'Cluster 4',
            type: 'bar',
            areaStyle: {},
            stack: 'Total',
            data: cluster4
          }
        ]
      }
    }
  },
  methods: {
    initData() {
      //console.log(data)
      // console.log(this.age)
    }
  },
  created() {
    this.initData()
  }
}
</script>

<style scoped>
.chart {
  height: 400px;
  width: 100%;
}
</style>
