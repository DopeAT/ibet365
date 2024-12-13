import type { IBetApi, EStatus } from '~/types'

export interface IBetCategoryApi {
  id: number
  title: string
  slug: string | null
  description: string
  betStatus: EStatus
  bets: IBetApi[]
}
