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
      loading: true,
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
          text: 'Min/Max/Average of Yearly Income by Cluster',
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
            'Average of yearly income'
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
            max: 180000,
            interval: 90000,
            axisLabel: {
              formatter: '${value}'
            }
          }
        ],
        series: [
          {
            name: 'Min of yearly income',
            type: 'bar',
            data: []
          },
          {
            name: 'Max of yearly income',
            type: 'bar',
            data: []
          },
          {
            name: 'Average of yearly income',
            type: 'line',
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
      this.getYearlyIncomeData()
    },
    getYearlyIncomeData() {
      // TODO reformat with the use of Vuex actions
      this.$axios
        .$get('api/yearly_income/')
        .then((response) => {
          // *  transform data from money format to number format (e.g. $170,000.00 to 170000)
          // ?  processed result is in form of [minArray, maxArray, avgArray]
          let processedData = []

          let minIncome = []
          minIncome.push(
            parseFloat(
              response.data.marriedmale.min
                .replaceAll('$', '')
                .replaceAll(',', '')
            )
          )
          minIncome.push(
            parseFloat(
              response.data.singlemale.min
                .replaceAll('$', '')
                .replaceAll(',', '')
            )
          )
          minIncome.push(
            parseFloat(
              response.data.marriedfemale.min
                .replaceAll('$', '')
                .replaceAll(',', '')
            )
          )
          minIncome.push(
            parseFloat(
              response.data.singlemale.min
                .replaceAll('$', '')
                .replaceAll(',', '')
            )
          )

          let maxIncome = []
          maxIncome.push(
            parseFloat(
              response.data.marriedmale.max
                .replaceAll('$', '')
                .replaceAll(',', '')
            )
          )
          maxIncome.push(
            parseFloat(
              response.data.singlemale.max
                .replaceAll('$', '')
                .replaceAll(',', '')
            )
          )
          maxIncome.push(
            parseFloat(
              response.data.marriedfemale.max
                .replaceAll('$', '')
                .replaceAll(',', '')
            )
          )
          maxIncome.push(
            parseFloat(
              response.data.singlemale.max
                .replaceAll('$', '')
                .replaceAll(',', '')
            )
          )

          let avgIncome = []
          avgIncome.push(
            parseFloat(
              response.data.marriedmale.avg
                .replaceAll('$', '')
                .replaceAll(',', '')
            )
          )
          avgIncome.push(
            parseFloat(
              response.data.singlemale.avg
                .replaceAll('$', '')
                .replaceAll(',', '')
            )
          )
          avgIncome.push(
            parseFloat(
              response.data.marriedfemale.avg
                .replaceAll('$', '')
                .replaceAll(',', '')
            )
          )
          avgIncome.push(
            parseFloat(
              response.data.singlemale.avg
                .replaceAll('$', '')
                .replaceAll(',', '')
            )
          )

          processedData.push(minIncome)
          processedData.push(maxIncome)
          processedData.push(avgIncome)
          this.option.series[0].data = minIncome
          this.option.series[1].data = maxIncome
          this.option.series[2].data = avgIncome
          this.loading = false
        })
        .catch(alert)
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
