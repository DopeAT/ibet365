import type { IChallengeApi } from '~/types'

interface State {
  challenges: IChallengeApi[]
  challenge: IChallengeApi | null
}

export const useChallengesStore = defineStore('challengesStore', () => {
  const { $api } = useNuxtApp()

  const state = reactive<State>({
    challenges: [],
    challenge: null
  })

  const getChallenges = computed(() => state.challenges)
  const getChallenge = computed(() => state.challenge)

  async function fetchChallenges() {
    const res = await $api.challenge.fetchChallenges()

    if (res.error) return

    state.challenges = res.value!.data
  }

  async function fetchChallenge(slug: string) {
    const res = await $api.challenge.fetchChallenge(slug)

    if (res.error) return

    state.challenge = res.value!.data
  }

  return {
    ...toRefs(state),
    getChallenge,
    getChallenges,
    fetchChallenge,
    fetchChallenges
  }
})
