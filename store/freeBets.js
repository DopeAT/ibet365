import bookies from '@/plugins/api/bookies'

export const state = () => ({
  freeBets: {}
})

export const getters = {
  getFreeBets: state => state.freeBets
}

export const mutations = {
  setFreeBets: (state, payload) => {
    state.freeBets = payload
  }
}

export const actions = {
  fetch ({ commit }, total) {
    return bookies.getFreeBets(total).then((res) => {
      if (!res || res.info.error) {
        // do something here
      }

      commit('setFreeBets', res.payload)

      return res
    })
  }
}
