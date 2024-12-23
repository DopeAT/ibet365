import { IbFetchFactory } from '~/services/ibFetchFactory'
import type { IBetCategoryApi, IStrapiRes, OperationResult } from '~/types'

export class BetCategoryApi extends IbFetchFactory {
  fetchBetCategories(): Promise<OperationResult<IStrapiRes<IBetCategoryApi[]>>> {
    return this.$ib_get(`/bet-categories`)
  }

  fetchTodayBets(): Promise<OperationResult<IStrapiRes<IBetCategoryApi[]>>> {
    return this.$ib_get(`/betting-tips-today`)
  }
}
