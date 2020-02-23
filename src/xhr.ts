import { AxiosConfig } from './types/index'
function zhenXhr(config: AxiosConfig): void {
  const { url, data = null, method = 'get' } = config
  const request = new XMLHttpRequest()
  request.open(method.toLocaleUpperCase(), url, true)
  request.send(data)
}

export default zhenXhr
