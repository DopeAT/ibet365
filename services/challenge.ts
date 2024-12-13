import { IbFetchFactory } from '~/services/ibFetchFactory'
import type { IChallengeApi, IStrapiRes, OperationResult } from '~/types'

export class ChallengeApi extends IbFetchFactory {
  fetchChallenges(): Promise<OperationResult<IStrapiRes<IChallengeApi[]>>> {
    return this.$ib_get(`/challenges`)
  }

  fetchChallenge(slug: string): Promise<OperationResult<IStrapiRes<IChallengeApi>>> {
    return this.$ib_get(`/challenges/${slug}`)
  }
}
