import * as Filters from '~/helpers/filters'
export const state = () => ({
  businesses: [],
  filteredBusinesses: [],
  business: {},
  filter: {
    search: '',
    status: 'all',
    order: 'createdAt'
  }
})
export const getters = {
  getBusinesses (state) {
    return state.businesses
  },
  getFilteredBusinesses (state) {
    return state.filteredBusinesses
  },
  getBusiness (state) {
    return state.business
  }
}

export const mutations = {
  SET_BUSINESSES (state, businesses) { state.businesses = businesses },
  SET_FILTERED_BUSINESSES (state, businesses) { state.filteredBusinesses = businesses },
  SET_BUSINESS (state, business) { state.business = business },
  SET_FILTER_STATUS (state, status) { state.filter.status = status },
  SET_FILTER_SEARCH (state, search) { state.filter.search = search },
  SET_ORDER (state, order) { state.filter.order = order },
  CLEAR_BUSINESSES (state) { state.businesses = [] },
  FILTER_BUSINESSES (state) {
    const businesses = [...state.businesses]
    state.filteredBusinesses = businesses
    state.filteredBusinesses = Filters.filterBusinesses(state.filter, businesses)
  },
  ORDER_BUSINESSES (state) {
    const businesses = [...state.filteredBusinesses]
    state.filterBusinesses = Filters.orderBusinesses(state.filter.order, businesses)
  }
}
export const actions = {
  async fetchAllBusinesses ({ commit }) {
    const businessref = this.$fire.firestore.collection('emprendimiento')
    try {
      const businesses = []
      const businessDoc = await businessref.get()
      businessDoc.forEach((doc) => {
        const business = { ...doc.data() }
        business.id = doc.id
        businesses.push(business)
      })
      await commit('SET_BUSINESSES', businesses)
      await commit('SET_FILTERED_BUSINESSES', businesses)
    } catch (e) {
      console.log(e)
    }
  },
  async filterOrder ({ commit }, order) {
    await commit('SET_ORDER', order)
    await commit('ORDER_BUSINESSES')
  },
  async filterStatus ({ commit, dispatch }, status) {
    await commit('SET_FILTER_STATUS', status)
    dispatch('filterBusinesses')
  },
  async filterSearch ({ commit, dispatch }, search) {
    await commit('SET_FILTER_SEARCH', search)
    dispatch('filterBusinesses')
  },
  async filterBusinesses ({ commit }) {
    await commit('FILTER_BUSINESSES')
    await commit('ORDER_BUSINESSES')
  },
  async clearBusinesses ({ commit }) {
    await commit('CLEAR_BUSINESSES')
  }
}
