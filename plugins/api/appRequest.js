import axiosRequest from '@/plugins/axiosRequest'

const apiUrl = process.env.API_SERVICE_BASE_URL || 'http://mbb.api.gateway.mybetbible.test'

function errorInfo (message) {
  return {
    error: true,
    status: 500,
    errorMessage: message
  }
}

export default {
  handleResponse (res) {
    res = {
      info: res.info || errorInfo('Server Error'),
      payload: res.data
    }

    if (res.info.error && !res.info.errorMessage) {
      const message = 'Server Error'
      res.info.errorMessage = res.info.errorMessage || message
    }

    const successStatuses = [200, 201]

    if (!res.info.error && !successStatuses.includes(res.info.status)) {
      res.info.error = true
    }

    return res
  },
  request (url, data, options) {
    options = options || {}
    options.headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    return axiosRequest.request(apiUrl + url, data, options).then(this.handleResponse).catch(this.handleResponse)
  },
  apiRequest (url, data, options) {
    return this.request(url, data, options)
  },
  apiGet (url, data, options) {
    return this.apiRequest(url, data, options)
  }
}
