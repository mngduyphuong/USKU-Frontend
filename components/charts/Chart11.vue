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
        color: ['#808080', '#59937e', '#5b79b9', '#a6505f'],
        title: {
          text: 'Orders by Item Types and Clusters',
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
          max: 1500,
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
            data: []
          },
          {
            name: 'Clothing',
            type: 'bar',
            data: []
          },
          {
            name: 'Bikes',
            type: 'bar',
            data: []
          },
          {
            name: 'Accessories',
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
      this.getOrdersByItemTypesData()
    },
    getOrdersByItemTypesData() {
      // TODO reformat with the use of Vuex actions
      this.$axios
        .$get('api/orders_by_item_types/')
        .then((response) => {
          let processedData = []

          // ?  data follow format [Components, Clothing, Bikes, Accessories]

          let componentsData = []
          componentsData.push(response.data.marriedmale[0].value)
          componentsData.push(response.data.singlefemale[0].value)
          componentsData.push(response.data.marriedfemale[0].value)
          componentsData.push(response.data.singlemale[0].value)
          processedData.push(componentsData)

          let clothingData = []
          clothingData.push(response.data.marriedmale[1].value)
          clothingData.push(response.data.singlefemale[1].value)
          clothingData.push(response.data.marriedfemale[1].value)
          clothingData.push(response.data.singlemale[1].value)
          processedData.push(clothingData)

          let bikesData = []
          bikesData.push(response.data.marriedmale[2].value)
          bikesData.push(response.data.singlefemale[2].value)
          bikesData.push(response.data.marriedfemale[2].value)
          bikesData.push(response.data.singlemale[2].value)
          processedData.push(bikesData)

          let accessoriesData = []
          accessoriesData.push(response.data.marriedmale[3].value)
          accessoriesData.push(response.data.singlefemale[3].value)
          accessoriesData.push(response.data.marriedfemale[3].value)
          accessoriesData.push(response.data.singlemale[3].value)
          processedData.push(accessoriesData)

          this.option.series[0].data = processedData[0]
          this.option.series[1].data = processedData[1]
          this.option.series[2].data = processedData[2]
          this.option.series[3].data = processedData[3]

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
