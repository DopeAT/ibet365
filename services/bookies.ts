import { IbFetchFactory } from '~/services/ibFetchFactory'
import type { IBookieApi, IStrapiRes, OperationResult, ECategories, ICategoryWithBookiesApi } from '~/types'

export class BookiesApi extends IbFetchFactory {
  protected $bookiesApi: string = 'https://api.mybetbible.com/api/'

  fetchBookie(bookie: string): Promise<OperationResult<IStrapiRes<IBookieApi>>> {
    return this.$ib_get(`/bookies/${bookie}`, { baseURL: this.$bookiesApi })
  }

  fetchByCategory(category: ECategories): Promise<OperationResult<IStrapiRes<ICategoryWithBookiesApi>>> {
    return this.$ib_get(`/categories/${category}`, { baseURL: this.$bookiesApi })
  }
}
