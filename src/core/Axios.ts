import { AxiosConfig, AxiosPromise, Methods } from '../types'
import dispatchRequest from './dispatchRequest'

export default class Axios {
  request(url: any, config?: any): AxiosPromise {
    if (typeof url === 'string') {
      if (!config) config = {}
      config.url = url
    } else config = url

    return dispatchRequest(config)
  }

  get(url: string, config?: AxiosConfig): AxiosPromise {
    return this._RequestParams('get', url, config)
  }

  head(url: string, config?: AxiosConfig): AxiosPromise {
    return this._RequestParams('head', url, config)
  }

  delete(url: string, config?: AxiosConfig): AxiosPromise {
    return this._RequestParams('delete', url, config)
  }

  options(url: string, config?: AxiosConfig): AxiosPromise {
    return this._RequestParams('options', url, config)
  }

  put(url: string, data?: any, config?: AxiosConfig): AxiosPromise {
    return this._RequestData('put', url, data, config)
  }

  post(url: string, data?: any, config?: AxiosConfig): AxiosPromise {
    return this._RequestData('post', url, data, config)
  }

  patch(url: string, data?: any, config?: AxiosConfig): AxiosPromise {
    return this._RequestData('patch', url, data, config)
  }

  _RequestParams(method: Methods, url: string, config?: AxiosConfig): AxiosPromise {
    return this.request(Object.assign(config || {}, { method, url }))
  }

  _RequestData(method: Methods, url: string, data?: any, config?: AxiosConfig): AxiosPromise {
    return this.request(Object.assign(config || {}, { method, url, data }))
  }
}
