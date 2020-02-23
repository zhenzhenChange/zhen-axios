import { parseHeaders } from './helpers/headers'
import { AxiosConfig, AxiosPromise, AxiosResult } from './types/index'

const zhenXhr = (config: AxiosConfig): AxiosPromise =>
  new Promise(resolve => {
    const { url, data = null, method = 'get', headers, responseType } = config

    const request = new XMLHttpRequest()

    responseType && (request.responseType = responseType)

    request.open(method.toUpperCase(), url, true)

    request.onreadystatechange = () => {
      if (request.readyState !== 4) return

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

      resolve(response)
    }

    Object.keys(headers).forEach(name => {
      if (!data && name.toLowerCase() === 'content-type') delete headers[name]
      else request.setRequestHeader(name, headers[name])
    })

    request.send(data)
  })

export default zhenXhr
