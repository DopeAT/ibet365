import { format } from 'date-fns'
import { EDateFormats } from '~/types'

export const formatDate = (date: string | null, dateFormat: EDateFormats = EDateFormats.DEFAULT) => {
  if (!date) return today()

  return format(new Date(date), dateFormat)
}

export const today = (dateFormat: EDateFormats = EDateFormats.DEFAULT): string => {
  return format(new Date(), dateFormat)
}
