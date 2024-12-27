import { IbFetchFactory } from '~/services/ibFetchFactory'
import type { IStrapiRes, IFaq, OperationResult } from '~/types'

export class FaqsApi extends IbFetchFactory {
  fetchFaqs(): Promise<OperationResult<IStrapiRes<IFaq[]>>> {
    return this.$ib_get(`/faqs?fields[0]=id&fields[1]=question&fields[2]=answer`)
  }
}
