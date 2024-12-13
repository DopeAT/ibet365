import type { IBetCategoryApi } from '~/types'

interface State {
  betCategories: IBetCategoryApi[]
}

export const useBetCategoriesStore = defineStore('betCategoriesStore', () => {
  const { $api } = useNuxtApp()

  const state = reactive<State>({
    betCategories: []
  })

  const getBetCategories = computed(() => state.betCategories)

  async function fetchBetCategories() {
    const res = await $api.betCategory.fetchBetCategories()

    if (res.error) return

    state.betCategories = res.value!.data
  }

  return {
    ...toRefs(state),
    getBetCategories,
    fetchBetCategories
  }
})
