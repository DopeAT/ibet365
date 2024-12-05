import { type FetchOptions, $fetch } from 'ofetch'
import { BookiesApi, TrackingApi } from '~/services'

interface Api {
  bookies: BookiesApi
  tracking: TrackingApi
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
    bookies: new BookiesApi(apiFetcher),
    tracking: new TrackingApi(apiFetcher)
  }

  return {
    provide: {
      api: api
    }
  }
})
