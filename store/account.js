export const state = () => ({
  accountInfo: {
    isSuperuser: null,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    geographyKey: '',
    birthDate: '',
    maritalStatus: '',
    gender: '',
    yearlyIncome: '',
    totalChildren: '',
    numberChildrenAtHome: '',
    education: '',
    occupation: '',
    houseOwnerFlag: 0,
    numberCarsOwned: 0,
    addressLine1: '',
    addressLine2: '',
    dateFirstPurchase: null,
    commuteDistance: ''
  }
})

export const getters = {
  accountInfo: (s) => s.accountInfo
}

export const mutations = {
  updateAccountDetail(state, accountData) {
    state.accountInfo.isSuperuser = accountData.is_superuser
    // *  only set cookie when accountData.is_superuser is not null
    if (accountData.is_superuser) {
      this.$cookies.set('uskuIsSuperuser', accountData.is_superuser)
    }

    state.accountInfo.username = accountData.username
    state.accountInfo.firstName = accountData.first_name
    state.accountInfo.lastName = accountData.last_name
    state.accountInfo.email = accountData.email
    state.accountInfo.geographyKey = accountData.geographykey
    state.accountInfo.birthDate = accountData.birthdate
    state.accountInfo.maritalStatus = accountData.maritalstatus
    state.accountInfo.gender = accountData.gender
    state.accountInfo.yearlyIncome = accountData.yearlyincome
    state.accountInfo.totalChildren = accountData.totalchildren
    state.accountInfo.numberChildrenAtHome = accountData.numberchildrenathome
    state.accountInfo.education = accountData.englisheducation
    state.accountInfo.occupation = accountData.englishoccupation
    state.accountInfo.houseOwnerFlag = accountData.houseownerflag
    state.accountInfo.numberCarsOwned = accountData.numbercarsowned
    state.accountInfo.addressLine1 = accountData.addressline1
    state.accountInfo.addressLine2 = accountData.addressline2
    state.accountInfo.dateFirstPurchase = accountData.datefirstpurchase
    state.accountInfo.commuteDistance = accountData.commutedistance
  }
}

export const actions = {
  getCurrentAccountInfo({ commit }) {
    this.$authorizedAPI
      .$get('account/current/')
      .then((response) => {
        commit('updateAccountDetail', response.data)
      })
      .catch(console.error)
  },

  removeAccountInfo({ commit }) {
    let sanitizedAccountDetail = {
      isSuperuser: null,
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      geographyKey: '',
      birthDate: '',
      maritalStatus: '',
      gender: '',
      yearlyIncome: '',
      totalChildren: '',
      numberChildrenAtHome: '',
      education: '',
      occupation: '',
      houseOwnerFlag: 0,
      numberCarsOwned: 0,
      addressLine1: '',
      addressLine2: '',
      dateFirstPurchase: null,
      commuteDistance: ''
    }
    commit('updateAccountDetail', sanitizedAccountDetail)
  }
}
