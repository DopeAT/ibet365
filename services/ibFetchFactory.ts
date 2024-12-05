import type { IFetchError, $Fetch, FetchOptions } from 'ofetch'
import type { OperationResult } from '~/types'
import { createOperationResult } from '~/utils'
import { IbErrorHandler } from '~/classes'

export class IbFetchFactory {
  protected $fetch: $Fetch

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher
  }

  private callApi<T>(url: string, options?: FetchOptions): Promise<OperationResult<T>> {
    const { public: publicEnv } = useRuntimeConfig()

    return this.$fetch(url, { ...options, baseURL: options?.baseURL ?? publicEnv.strapiUrl + '/api' })
      .then((res: T) => createOperationResult({ success: true, value: res }))
      .catch((e: IFetchError) => {
        if ('error' in e) {
          return createOperationResult({
            success: false,
            error: IbErrorHandler.fromFetchError(e).message
          })
        }

        return createOperationResult({
          success: false,
          error: new IbErrorHandler(new Error('Unknown error has occurred')).message
        })
      })
  }

  public $ib_get<T>(url: string, options?: FetchOptions): Promise<OperationResult<T>> {
    return this.callApi<T>(url, { method: 'GET', ...options })
  }

  public $ib_post<T>(url: string, data: RequestInit['body'] | Record<string, any>, options?: FetchOptions): Promise<OperationResult<T>> {
    return this.callApi<T>(url, { method: 'GET', body: data, ...options })
  }
}
