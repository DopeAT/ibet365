import type { IStrapiRes, ITrack, OperationResult } from '~/types'
import { IbFetchFactory } from '~/services/ibFetchFactory'

export class TrackingApi extends IbFetchFactory {
  trackClick(data: ITrack): Promise<OperationResult<IStrapiRes<ITrack>>> {
    return this.$fetch(`/tracks`, {
      method: 'POST',
      baseURL: 'https://api.mybetbible.com/api',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: { data }
    })
  }
}
