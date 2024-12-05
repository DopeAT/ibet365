import type { IBonusApi, ICategoryApi, IEntityApi, IFeatureApi, IOfferApi } from '~/types'

export interface IBookieApi extends IEntityApi {
  body: string
  description: string
  name: string
  slug: string
  url: string

  /** Relations **/
  bonuses: IBonusApi[]
  categories: ICategoryApi[]
  features: IFeatureApi[]
  logo: { url: string }
  offers: IOfferApi[]
}
