import type { EStatus, IBetApi } from '~/types'

export interface IChallengeApi {
  id: number
  title: string
  slug: string
  description: string
  challengeStatus: EStatus
  totalBets: number
  bank: number
  bookieSlug: string
  bets: IBetApi[]
}
