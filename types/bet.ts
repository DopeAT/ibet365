import type { EStatus, ITipApi } from '~/types'

export interface IBetApi {
  title: string
  description: string
  date: string
  betStatus: EStatus
  id: number
  stake: number
  homeGoals: number
  awayGoals: number
  tip: ITipApi
}
