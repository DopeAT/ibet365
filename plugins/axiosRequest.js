import axios from 'axios'

const cancelToken = axios.CancelToken

export default {
  axiosRequest (init, options, callback) {
    if (!init.url) { throw new Error('URL is required') }

    if (options.cancelCallback != null && typeof options.cancelCallback === 'function') {
      init.cancelToken = new cancelToken(options.cancelCallback)
    }

    return axios(init).then(callback).catch((error) => {
      if (error.response) {
        if (error.response.status === 404 || error.response.status === 405) {
          return // fix mock here
        }

        return error.response.data
      } else if (error.request) {
        return {
          info: {
            error: true,
            status: 511,
            message: 'Network Error'
          }
        }
      }

      return error
    })
  },
  requestResponse (response) {
    return response.data
  },
  request (url, data, options) {
    options = options || {}

    const init = {
      method: options.method || 'GET',
      url,
      headers: options.headers,
      data
    }

    return this.axiosRequest(init, options, this.requestResponse)
  },
  fileRequest (url, data, options) {
    options = options || {}

    const init = {
      method: options.method || 'GET',
      url,
      headers: options.headers,
      data,
      responseType: options.responseType || 'blob'
    }

    return this.axiosRequest(init, options, this.requestResponse)
  }
}
