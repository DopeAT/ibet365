import appRequest from '@/plugins/api/appRequest'

export default {
  getChallenges () {
    return appRequest.apiGet('/api/challenges')
  },
  getChallenge (challenge) {
    return appRequest.apiGet('/api/challenges/' + challenge)
  }
}
