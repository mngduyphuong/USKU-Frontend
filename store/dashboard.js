export const state = () => ({
  dashboardData: {
    ordersByCountry: null,
    salesAmountByCountry: null,
    ordersByTier: null,
    ordersByCustomerSegment: null,
    customersByCustomerSegment: null,
    salesByCustomerSegment: null,
    customersByOccupation: null,
    customersByEducation: null,
    yearlyIncome: null,
    shippingRevByClusters: null,
    customersBySalesTerritory: null,
    ordersByItemTypes: null,
    ageByClusters: null
  }
})

export const getters = {
  dashboardData: (s) => s.dashboardData
}

export const mutations = {
  updateOrdersByCountryData(state, ordersByCountryData) {
    state.dashboardData.ordersByCountry = ordersByCountryData
  },

  updateSalesAmountByCountryData(state, salesAmountByCountryData) {
    state.dashboardData.salesAmountByCountry = salesAmountByCountryData
  },

  updateOrdersByTierData(state, ordersByTierData) {
    state.dashboardData.ordersByTier = ordersByTierData
  },

  updateOrdersByCustomerSegmentData(state, ordersByCustomerSegmentData) {
    state.dashboardData.ordersByCustomerSegment = ordersByCustomerSegmentData
  },

  updateCustomersByCustomerSegmentData(state, customersByCustomerSegmentData) {
    state.dashboardData.customersByCustomerSegment =
      customersByCustomerSegmentData
  },

  updateSalesByCustomerSegmentData(state, salesByCustomerSegmentData) {
    state.dashboardData.salesByCustomerSegment = salesByCustomerSegmentData
  },

  updateCustomersByOccupationData(state, salesCustomersByOccupationData) {
    state.dashboardData.customersByOccupation = salesCustomersByOccupationData
  },

  updateCustomersByEducationData(state, salesCustomersByEducationData) {
    state.dashboardData.customersByEducation = salesCustomersByEducationData
  },

  updateYearlyIncomeData(state, yearlyIncomeData) {
    state.dashboardData.yearlyIncome = yearlyIncomeData
  },

  updateShippingRevByClustersData(state, shippingRevByClustersData) {
    state.dashboardData.shippingRevByClusters = shippingRevByClustersData
  },

  updateCustomersBySalesTerritoryData(state, customersBySalesTerritoryData) {
    state.dashboardData.customersBySalesTerritory =
      customersBySalesTerritoryData
  },

  updateOrdersByItemTypesData(state, ordersByItemTypesData) {
    state.dashboardData.ordersByItemTypes = ordersByItemTypesData
  },

  updateAgeByClustersData(state, ageByClustersData) {
    state.dashboardData.ageByClusters = ageByClustersData
  }
}

export const actions = {
  getSalesByCountryData({ commit }) {
    this.$axios
      .$get('api/sales_by_country/')
      .then((response) => {
        commit('updateOrdersByCountryData', response.totalorder)
        commit('updateSalesAmountByCountryData', response.totalamount)
      })
      .catch(alert)
  },

  getOrdersByTierData({ commit }) {
    this.$axios
      .$get('api/orders_by_tier/')
      .then((response) => {
        // * response data contain 3 json object
        let processedData = []
        processedData.push(response.data[0].total)
        processedData.push(response.data[1].total)
        processedData.push(response.data[2].total)
        commit('updateOrdersByTierData', processedData)
      })
      .catch(alert)
  },

  getOrdersCustomerSegmentData({ commit }) {
    this.$axios
      .$get('api/customer_segmentation/')
      .then((response) => {
        // ?  transform response data into processed array following format [[MM], [MF], [SM], [SF]]
        let processedOrdersData = [[], [], [], []]
        processedOrdersData[0].push(response.data.orders.marriedmale)
        processedOrdersData[1].push(response.data.orders.marriedfemale)
        processedOrdersData[2].push(response.data.orders.singlemale)
        processedOrdersData[3].push(response.data.orders.singlefemale)
        commit('updateOrdersByCustomerSegmentData', processedOrdersData)

        // ?  transform response data into processed array following format [MM, MF, SM, SF]
        let processedCustomerData = []
        processedCustomerData.push(response.data.customers.marriedmale)
        processedCustomerData.push(response.data.customers.marriedfemale)
        processedCustomerData.push(response.data.customers.singlemale)
        processedCustomerData.push(response.data.customers.singlefemale)
        commit('updateCustomersByCustomerSegmentData', processedCustomerData)
      })
      .catch(alert)
  },

  getSalesByCustomerSegmentData({ commit }) {
    this.$axios
      .$get('api/sales_by_customer_segment/')
      .then((response) => {
        commit('updateSalesByCustomerSegmentData', response)
      })
      .catch(alert)
  },

  getCustomersByOccupationData({ commit }) {
    this.$axios
      .$get('api/customers_by_occupation/')
      .then((response) => {
        commit('updateCustomersByOccupationData', response.data)
      })
      .catch(alert)
  },

  getCustomersByEducationData({ commit }) {
    this.$axios
      .$get('api/customers_by_education/')
      .then((response) => {
        commit('updateCustomersByEducationData', response.data)
      })
      .catch(alert)
  },

  getYearlyIncomeData({ commit }) {
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
            response.data.singlemale.min.replaceAll('$', '').replaceAll(',', '')
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
            response.data.singlemale.min.replaceAll('$', '').replaceAll(',', '')
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
            response.data.singlemale.max.replaceAll('$', '').replaceAll(',', '')
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
            response.data.singlemale.max.replaceAll('$', '').replaceAll(',', '')
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
            response.data.singlemale.avg.replaceAll('$', '').replaceAll(',', '')
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
            response.data.singlemale.avg.replaceAll('$', '').replaceAll(',', '')
          )
        )

        processedData.push(minIncome)
        processedData.push(maxIncome)
        processedData.push(avgIncome)

        commit('updateYearlyIncomeData', processedData)
      })
      .catch(alert)
  },

  getShippingRevByClustersData({ commit }) {
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

        let processedData = []
        processedData.push(type1Rev)
        processedData.push(type2Rev)
        processedData.push(type3Rev)

        commit('updateShippingRevByClustersData', processedData)
      })
      .catch(alert)
  },

  getCustomersBySalesTerritoryData({ commit }) {
    this.$axios
      .$get('api/customer_by_sales_territory/')
      .then((response) => {
        let processedData = []

        let salesTerritoryKeys = []
        // * sales territory key list of male is the same as female's
        response.data.male.forEach((element) => {
          salesTerritoryKeys.push(element.salesterritoryregion)
        })
        processedData.push(salesTerritoryKeys)

        let maleData = []
        response.data.male.forEach((element) => {
          maleData.push(element.value)
        })
        processedData.push(maleData)

        let femaleData = []
        response.data.female.forEach((element) => {
          femaleData.push(element.value)
        })
        processedData.push(femaleData)

        commit('updateCustomersBySalesTerritoryData', processedData)
      })
      .catch(alert)
  },

  getOrdersByItemTypesData({ commit }) {
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

        commit('updateOrdersByItemTypesData', processedData)
      })
      .catch(alert)
  },

  getUpdateAgeByClustersData({ commit }) {
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

        commit('updateAgeByClustersData', processedData)
      })
      .catch(alert)
  },

  initDashboardData({ dispatch }) {
    dispatch('getSalesByCountryData')
    dispatch('getOrdersByTierData')
    dispatch('getOrdersCustomerSegmentData')
    dispatch('getSalesByCustomerSegmentData')
    dispatch('getCustomersByOccupationData')
    dispatch('getCustomersByEducationData')
    dispatch('getYearlyIncomeData')
    dispatch('getShippingRevByClustersData')
    dispatch('getCustomersBySalesTerritoryData')
    dispatch('getOrdersByItemTypesData')
    dispatch('getUpdateAgeByClustersData')
  }
}
