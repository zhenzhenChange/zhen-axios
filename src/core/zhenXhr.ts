import { createError } from '../helpers/error'
import { parseHeaders } from '../helpers/headers'
import { AxiosConfig, AxiosPromise, AxiosResult } from '../types'

const zhenXhr = (config: AxiosConfig): AxiosPromise =>
  new Promise((resolve, reject) => {
    const { url, data = null, method = 'get', headers, responseType, timeout } = config

    const request = new XMLHttpRequest()

    timeout && (request.timeout = timeout)
    responseType && (request.responseType = responseType)

    const handleResponse = (response: AxiosResult): void => {
      const status = response.status
      if (status >= 200 && status <= 300) resolve(response)
      else reject(createError(config, failedMsg, null, request, response))
    }

    request.open(method.toUpperCase(), url!, true)

    request.onreadystatechange = () => {
      if (request.readyState !== 4) return

      if (request.status === 0) return

      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType === 'text' ? request.responseText : request.response

      const response: AxiosResult = {
        config,
        request,
        data: responseData,
        status: request.status,
        headers: responseHeaders,
        statusText: request.statusText
      }

      handleResponse(response)
    }

    const errorMsg = 'Network Error.'
    const timeoutMsg = `Timeout of ${timeout} ms exceeded.`
    const failedMsg = `Request failed with status code ${status}`

    request.onerror = () => reject(createError(config, errorMsg, null, request))
    request.ontimeout = () => reject(createError(config, timeoutMsg, 'ECONNABORTED', request))

    Object.keys(headers).forEach(name => {
      if (!data && name.toLowerCase() === 'content-type') delete headers[name]
      else request.setRequestHeader(name, headers[name])
    })

    request.send(data)
  })

export default zhenXhr
