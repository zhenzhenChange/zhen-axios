import { isPlainObject } from './utils'

const normalizeHearderName = (headers: any, normalizeName: string): void => {
  if (!headers) return

  Object.keys(headers).forEach(name => {
    if (name !== normalizeName && name.toUpperCase() === normalizeName.toUpperCase()) {
      headers[normalizeName] = headers[name]
      delete headers[name]
    }
  })
}

export const processHeaders = (headers: any, data: any): any => {
  const ContentType = 'Content-Type'

  normalizeHearderName(headers, ContentType)

  if (isPlainObject(data)) {
    if (headers && !headers[ContentType]) headers[ContentType] = 'application/json; charset=utf-8'
  }

  return headers
}

export const parseHeaders = (headers: string): any => {
  const parsed = Object.create(null)

  if (!headers) return parsed

  headers.split('\r\n').forEach(item => {
    let [key, value] = item.split(':')

    key = key.trim().toLowerCase()
    if (!key) return

    if (value) value = value.trim()

    parsed[key] = value
  })

  return parsed
}
