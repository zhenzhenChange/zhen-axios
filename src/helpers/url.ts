import { isDate, isPlainObject } from './utils'

function encode(arg: string): string {
  return encodeURIComponent(arg)
    .replace(/%20/g, '+')
    .replace(/%24/g, '$')
    .replace(/%40/g, '@')
    .replace(/%2C/gi, ',')
    .replace(/%3A/gi, ':')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL(url: string, params?: any): string {
  if (!params) return url

  const parts: Array<string> = []

  // 不使用for-in遍历，因为无需遍历出原型上的属性
  Object.keys(params).forEach(key => {
    const value = params[key]

    if (!value || typeof value === 'undefined') return

    let values = []
    if (Array.isArray(value)) {
      values = value
      key += '[]'
    } else {
      values = [value]
    }

    values.forEach(value => {
      if (isDate(value)) value = value.toISOString()

      if (isPlainObject(value)) value = JSON.stringify(value)

      parts.push(`${encode(key)}=${encode(value)}`)
    })
  })

  let serializedParams = parts.join('&')

  if (serializedParams) {
    const hashIndex = url.indexOf('#')
    if (hashIndex !== -1) url = url.slice(0, hashIndex)

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}
