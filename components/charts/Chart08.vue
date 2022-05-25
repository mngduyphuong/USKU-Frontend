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
// const cluster1 = [],
//   cluster2 = [],
//   cluster3 = [],
//   cluster4 = []
// const age = []
// for (let i = 1; i < 65; i++) {
//   if (i != 64) {
//     cluster1.push(Math.floor(Math.random() * 105))
//     cluster2.push(Math.floor(Math.random() * 105))
//     cluster3.push(Math.floor(Math.random() * 105))
//     cluster4.push(Math.floor(Math.random() * 105))
//   } else {
//     cluster1.push(Math.floor(Math.random() * 105))
//     cluster3.push(Math.floor(Math.random() * 105))
//   }

//   age.push(i + 35)
// }
// console.info(age)
// console.info(cluster1)
// console.info(cluster2)
// console.info(cluster3)
// console.info(cluster4)

export default {
  name: 'HelloWorld',
  components: {
    VChart
  },
  data() {
    return {
      loading: true,
      option: {
        title: {
          text: 'Count of Customer Key by Age and Cluster',
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
            data:[],
            // type: 'value',
            name: 'Age'
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
            name: 'Count of Customer Key',
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
            data: []
          },
          {
            name: 'Cluster 2',
            type: 'bar',
            areaStyle: {},
            stack: 'Total',
            data: []
          },
          {
            name: 'Cluster 3',
            type: 'bar',
            areaStyle: {},
            stack: 'Total',
            data: []
          },
          {
            name: 'Cluster 4',
            type: 'bar',
            areaStyle: {},
            stack: 'Total',
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
      this.getUpdateAgeByClustersData()
    },
    getUpdateAgeByClustersData() {
      // TODO reformat with the use of Vuex actions
      this.$axios
        .$get('api/age_by_clusters/')
        .then((response) => {
          let processedData = []

          let ageRange = []
          let marriedmaleData = []
          let singlefemaleData = []
          let marriedfemaleData = []
          let singlemaleData = []

          for (let i = response.min; i <= response.max; i++) {
            // ?  init age range from the lowest age (min) to the highest age (max)
            ageRange.push(i)

            // ?  init data arrays respective to the age range, missing data for a certain age thus will a have value of 0
            marriedmaleData[i] = 0
            singlefemaleData[i] = 0
            marriedfemaleData[i] = 0
            singlemaleData[i] = 0
          }

          // *  processedData array will follow the format [ageRange, cluster1Data, cluster2Data, cluster3Data, cluster4Data]
          processedData.push(ageRange)

          response.data.marriedmale.forEach((element) => {
            // ?  start from the min age, min age will have the 1st position (0)
            let position = element.age - response.min
            marriedmaleData[position] = element.value
          })
          processedData.push(marriedmaleData)

          response.data.singlefemale.forEach((element) => {
            // ?  start from the min age, min age will have the 1st position (0)
            let position = element.age - response.min
            singlefemaleData[position] = element.value
          })
          processedData.push(singlefemaleData)

          response.data.marriedfemale.forEach((element) => {
            // ?  start from the min age, min age will have the 1st position (0)
            let position = element.age - response.min
            marriedfemaleData[position] = element.value
          })
          processedData.push(marriedfemaleData)

          response.data.singlemale.forEach((element) => {
            // ?  start from the min age, min age will have the 1st position (0)
            let position = element.age - response.min
            singlemaleData[position] = element.value
          })
          processedData.push(singlemaleData)
          this.option.xAxis[0].data = ageRange
          this.option.series[0].data = marriedmaleData
          this.option.series[1].data = singlefemaleData
          this.option.series[2].data = marriedfemaleData
          this.option.series[3].data = singlemaleData
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
