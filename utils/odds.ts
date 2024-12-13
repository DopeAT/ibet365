import { EOddsType, ETipResult } from '~/types'

export const convertOdds = (value: string | number, format: EOddsType): string | number => {
  if (typeof value === 'string') {
    return value.includes('/') ? fractionToDecimal(value) : ''
  }

  return format === EOddsType.DECIMAL ? value.toFixed(2) : decimalToFraction(value as number)
}

export const betsOdds = (bets: Array) => {
  return bets.reduce((acc, bet) => acc * bet.odds, 1).toFixed(2)
}

export const tipResult = (result: ETipResult): string => {
  switch (result) {
    case ETipResult.IN_PROGRESS:
      return `<i class="fas fa-clock text-green" title="In Progress"></i>`
    case ETipResult.WIN:
      return `<i class="fas fa-check text-green" title="Won"></i>`
    case ETipResult.LOSE:
      return `<i class="fas fa-times text-red-700" title="Lost"></i>`
    default:
      return `<i class="fas fa-circle text-gray-600" title="Void"></i>`
  }
}

const fractionToDecimal = (fraction: string): number => {
  // Split the fraction into numerator and denominator
  const [numerator, denominator] = fraction.split('/').map(Number)

  return numerator / denominator + 1
}

const decimalToFraction = (decimal: number): string => {
  // Subtract 1 to get the fractional value
  const fractionalValue = decimal - 1

  // Convert fractionalValue to a simplified fraction
  const denominator = 10000 // Large enough to ensure precision
  const numerator = Math.round(fractionalValue * denominator)

  // Function to find greatest common divisor
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))
  const divisor = gcd(numerator, denominator)

  // Simplify the fraction
  return `${numerator / divisor}/${denominator / divisor}`
}
