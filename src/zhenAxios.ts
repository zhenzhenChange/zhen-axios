import zhenXhr from './zhenXhr'
import { buildURL } from './helpers/url'
import { processHeaders } from './helpers/headers'
import { transformRequest, transformResponse } from './helpers/data'
import { AxiosConfig, AxiosPromise, AxiosResult } from './types/index'

const transformURL = (config: AxiosConfig): string => buildURL(config.url, config.params)

const transformHeaders = (config: AxiosConfig): any => {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

const transformRequestData = (config: AxiosConfig): any => transformRequest(config.data)

const transformResponseData = (result: AxiosResult): AxiosResult => {
  result.data = transformResponse(result.data)
  return result
}

const processConfig = (config: AxiosConfig): void => {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

const zhenAxios = (config: AxiosConfig): AxiosPromise => {
  processConfig(config)

  return zhenXhr(config).then(result => transformResponseData(result))
}

export default zhenAxios
