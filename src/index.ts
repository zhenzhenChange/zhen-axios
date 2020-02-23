import zhenXhr from './xhr'
import { buildURL } from './helpers/url'
import { AxiosConfig } from './types/index'

function transformURL(config: AxiosConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function processConfig(config: AxiosConfig): void {
  config.url = transformURL(config)
}

function zhenAxios(config: AxiosConfig): void {
  processConfig(config)
  zhenXhr(config)
}

export default zhenAxios
