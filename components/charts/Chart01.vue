<template>
  <div>
    <div v-if="!loading" class="row">
      <div class="col-md-4" style="text-align: right; margin: auto">
        <p>
          Total number of orders today:
          <span style="color: var(--UskuYellow)">{{ dataProps[0] }}</span>
        </p>
        <p>
          Delivered order:
          <span style="color: var(--UskuYellow)">{{ dataProps[1] }}</span>
        </p>
        <p>
          Succes rate:
          <span style="color: var(--UskuYellow)">{{ dataProps[2] }}%</span>
        </p>
      </div>
      <div class="col-md-8">
        <v-chart class="chart" :option="option" autoresize />
      </div>
    </div>

    <div
      v-else
      class="d-flex justify-content-center align-items-center chart"
      style="margin: auto"
    >
      <div class="spinner-border text-warning" role="status"></div>
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
      loading: true,
      dataTable: [],
      option: {
        color: ['#ffba00', '#FF5349', ' #0000FF'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['Total Orders', 'Delivered Orders', 'On Hold']
        },
        grid: {
          top: '10%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['USKU orders']
        },
        series: [
          {
            name: 'Total Orders',
            type: 'bar',
            data: [this.dataProps[0]]
          },
          {
            name: 'Delivered Orders',
            type: 'bar',
            data: [this.dataProps[1]]
          },
          {
            name: 'On Hold',
            type: 'bar',
            data: [this.dataProps[2]]
          }
        ]
      }
    }
  },
  created() {
    this.initData()
  },
  props: {
    dataProps: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    initData() {
      if (this.dataProps) this.loading = false
    }
  }
}
</script>

<style scoped>
.chart {
  height: 200px;
  width: 100%;
}
</style>
