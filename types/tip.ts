export enum EOddsType {
  FRACTION = 'fraction',
  DECIMAL = 'decimal'
}

export enum ETipResult {
  IN_PROGRESS = 'In Progress',
  WIN = 'Win',
  LOSE = 'Lose',
  VOID = 'Void'
}

export interface ITipCategory {
  title: string
  slug: string
  description: string
  tips: { odds: number }[]
}

export interface IChallenge {
  title: string
  slug: string
  description: string
  status: string
  totalBets: number
  tips: { odds: number, stake: number }[]
}

export interface IBetTipApp {

}
