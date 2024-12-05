import type { IBookieApi } from '~/types'

export const useBookie = () => {
  const { public: publicEnv } = useRuntimeConfig()

  const bookieImg = (bookie: Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>): string => {
    return publicEnv.mbbApiUrl + bookie.logo.url
  }

  return {
    bookieImg
  }
}
