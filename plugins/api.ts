import { type FetchOptions, $fetch } from 'ofetch'
import { FaqsApi, BookiesApi, TrackingApi, ChallengeApi, BetCategoryApi } from '~/services'

interface Api {
  faqs: FaqsApi
  bookies: BookiesApi
  tracking: TrackingApi
  challenge: ChallengeApi
  betCategory: BetCategoryApi
}

declare module '#app' {
  interface NuxtApp {
    $api: Api
  }
}

export default defineNuxtPlugin(({ $config }) => {
  const fetchOptions: FetchOptions = {
    baseURL: $config.public.strapiUrl + '/api'
  }

  const apiFetcher = $fetch.create(fetchOptions)

  const api: Api = {
    faqs: new FaqsApi(apiFetcher),
    bookies: new BookiesApi(apiFetcher),
    tracking: new TrackingApi(apiFetcher),
    challenge: new ChallengeApi(apiFetcher),
    betCategory: new BetCategoryApi(apiFetcher)
  }

  return {
    provide: {
      api: api
    }
  }
})
