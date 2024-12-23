import type { IBetCategoryApi } from '~/types'

interface State {
  betCategories: IBetCategoryApi[]
  todayBets: IBetCategoryApi[]
}

export const useBetCategoriesStore = defineStore('betCategoriesStore', () => {
  const { $api } = useNuxtApp()

  const state = reactive<State>({
    betCategories: [],
    todayBets: []
  })

  const getBetCategories = computed(() => state.betCategories)
  const getTodayBets = computed(() => state.todayBets)

  async function fetchBetCategories() {
    const res = await $api.betCategory.fetchBetCategories()

    if (res.error) return

    state.betCategories = res.value!.data
  }

  async function fetchTodayBets() {
    const res = await $api.betCategory.fetchTodayBets()

    if (res.error) return

    state.todayBets = res.value!.data
  }

  return {
    ...toRefs(state),
    getTodayBets,
    fetchTodayBets,
    getBetCategories,
    fetchBetCategories
  }
})
