import { EStatus, type IBetApi, type ITipApi } from '~/types'

// export const convertOdds = (value: string | number, format: EOddsType): string | number => {
//   if (typeof value === 'string') {
//     return value.includes('/') ? fractionToDecimal(value) : ''
//   }
//
//   return format === EOddsType.DECIMAL ? value.toFixed(2) : decimalToFraction(value as number)
// }

export const betsOdds = (bets: IBetApi[]) => {
  return bets.reduce((totalSum, bet) => {
    return totalSum * bet.tip.odds
  }, 1).toFixed(2)
}

export const tipsOdds = (tips: ITipApi[]) => {
  return tips.reduce((sum, tip) => sum * tip.odds, 1)
}

export const tipResult = (result: EStatus): { icon: string, class: string, title: string } => {
  switch (result) {
    case EStatus.IN_PROGRESS:
      return {
        icon: 'clock',
        class: 'text-green',
        title: 'In Progress'
      }
    case EStatus.WIN:
      return {
        icon: 'check',
        class: 'text-green',
        title: 'Won'
      }
    case EStatus.LOSE:
      return {
        icon: 'times',
        class: 'text-red-700',
        title: 'Lost'
      }
    default:
      return {
        icon: 'circle',
        class: 'text-gray-600',
        title: 'Void'
      }
  }
}

// const fractionToDecimal = (fraction: string): number => {
//   // Split the fraction into numerator and denominator
//   const [numerator, denominator] = fraction.split('/').map(Number)
//
//   return numerator / denominator + 1
// }
//
// const decimalToFraction = (decimal: number): string => {
//   // Subtract 1 to get the fractional value
//   const fractionalValue = decimal - 1
//
//   // Convert fractionalValue to a simplified fraction
//   const denominator = 10000 // Large enough to ensure precision
//   const numerator = Math.round(fractionalValue * denominator)
//
//   // Function to find greatest common divisor
//   const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))
//   const divisor = gcd(numerator, denominator)
//
//   // Simplify the fraction
//   return `${numerator / divisor}/${denominator / divisor}`
// }
