import type { IFetchError } from 'ofetch'

export class IbErrorHandler extends Error {
  constructor(err: Error) {
    super(err.message || 'Unknown error has occurred')
  }

  static fromFetchError(err: IFetchError) {
    return new IbErrorHandler(new Error(err.message || 'Something went wrong'))
  }
}

export const handleError = function handelError(e: any) {
  if ('message' in (e as object)) {
    return new IbErrorHandler(new Error((e as { message: string }).message))
  }

  return new IbErrorHandler(new Error('Something went wrong'))
}
