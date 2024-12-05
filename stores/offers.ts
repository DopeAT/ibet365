import { ECategories, type IBookieApi } from '~/types'

interface State {
  sport: Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>[]
  casino: Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>[]
  poker: Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>[]
}

export const useOffersStore = defineStore('offersStore', () => {
  const { $api } = useNuxtApp()

  const state = reactive<State>({
    sport: [],
    casino: [],
    poker: []
  })

  const getSportOffers = computed(() => state.sport)
  const getCasinoOffers = computed(() => state.casino)
  const getPokerOffers = computed(() => state.poker)
  const getAllOffers = computed(() => [...state.sport, ...state.casino, ...state.poker])

  async function fetchSportBookies() {
    const res = await $api.bookies.fetchByCategory(ECategories.SPORTS)

    if (res.error) return

    state.sport = res.value!.data.bookies.filter(b => b.bonuses.length > 0)
  }

  async function fetchCasinoBookies() {
    const res = await $api.bookies.fetchByCategory(ECategories.CASINO)

    if (res.error) return

    state.casino = res.value!.data.bookies.filter(b => b.bonuses.length > 0)
  }

  async function fetchPokerBookies() {
    const res = await $api.bookies.fetchByCategory(ECategories.POKER)

    if (res.error) return

    state.poker = res.value!.data.bookies.filter(b => b.bonuses.length > 0)
  }

  async function fetchAllBookiesCategories() {
    await fetchSportBookies()
    await fetchCasinoBookies()
    await fetchPokerBookies()
  }

  return {
    ...toRefs(state),
    fetchPokerBookies,
    fetchSportBookies,
    fetchCasinoBookies,
    getAllOffers,
    getSportOffers,
    getPokerOffers,
    getCasinoOffers,
    fetchAllBookiesCategories
  }
})
