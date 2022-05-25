<template>
  <div>
    <div v-if="!loading" class="row">
      <div class="col-md">
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
      option: {
        color: ['#c9e7dc', '#92d0b9', '#59937e'],
        title: {
          text: 'Revenue from Shipping Costs by Cluster and Shipping Type',
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
          data: ['Type 1', 'Type 2', 'Type 3'],
          bottom: 'bottom'
        },
        grid: {
          top: '20%',
          bottom: '20%',
          containLabel: true
        },
        yAxis: {
          type: 'value',
          name: 'Revenues',
          min: 0,
          max: 36000,
          interval: 12000,
          axisLabel: {
            formatter: '${value}'
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
            name: 'Type 1',
            type: 'bar',
            data: []
          },
          {
            name: 'Type 2',
            type: 'bar',
            data: []
          },
          {
            name: 'Type 3',
            type: 'bar',
            data: []
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
      this.loading = true
      this.getShippingRevByClustersData()
    },
    getShippingRevByClustersData() {
      // TODO reformat with the use of Vuex actions
      this.$axios
        .$get('api/shipping_rev_by_clusters/')
        .then((response) => {
          let type1Rev = []
          type1Rev.push(response.data.marriedmale[0].sum)
          type1Rev.push(response.data.singlefemale[0].sum)
          type1Rev.push(response.data.marriedfemale[0].sum)
          type1Rev.push(response.data.singlemale[0].sum)

          let type2Rev = []
          type2Rev.push(response.data.marriedmale[1].sum)
          type2Rev.push(response.data.singlefemale[1].sum)
          type2Rev.push(response.data.marriedfemale[1].sum)
          type2Rev.push(response.data.singlemale[1].sum)

          let type3Rev = []
          type3Rev.push(response.data.marriedmale[2].sum)
          type3Rev.push(response.data.singlefemale[2].sum)
          type3Rev.push(response.data.marriedfemale[2].sum)
          type3Rev.push(response.data.singlemale[2].sum)

          // let processedData = []
          // processedData.push(type1Rev)
          // processedData.push(type2Rev)
          // processedData.push(type3Rev)
          this.option.series[0].data = type1Rev
          this.option.series[1].data = type2Rev
          this.option.series[2].data = type3Rev
          this.loading = false
        })
        .catch(alert)
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
