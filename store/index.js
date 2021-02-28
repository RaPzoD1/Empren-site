import { vuexfireMutations, firestoreAction } from 'vuexfire'

export const state = () => ({
  business: []
})

export const mutations = {
  ...vuexfireMutations,
  SET_BUSINESS: (state, payload) => {
    state.business = payload
  }
}

export const actions = {
  bindBusiness: firestoreAction(async function ({ bindFirestoreRef }) {
    const ref = this.$fire.firestore.collection('emprendimiento')
    await bindFirestoreRef('business', ref, { wait: true })
  }),
  unbindBusiness: firestoreAction(function ({ unbindFirestoreRef }) {
    unbindFirestoreRef('business', false)
  })
}

export const getters = {
  getBusiness (state) {
    return state.business
  }
}
