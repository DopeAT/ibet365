import challenges from '~/plugins/api/challenges'

export const state = () => ({
  challenges: [],
  challenge: {}
})

export const getters = {
  getChallenges: state => state.challenges,
  getChallenge: state => state.challenge
}

export const mutations = {
  setChallenges: (state, payload) => {
    state.challenges = payload
  },
  setChallenge: (state, payload) => {
    state.challenge = payload
  }
}

export const actions = {
  index ({ commit }) {
    return challenges.getChallenges().then((res) => {
      if (!res || res.info.error) {
        // do something here
      }

      commit('setChallenges', res.payload)

      return res
    })
  },
  show ({ commit }, slug) {
    return challenges.getChallenge(slug).then((res) => {
      if (!res || res.info.error) {
        // do something here
      }

      commit('setChallenge', res.payload[0])

      return res
    })
  }
}
