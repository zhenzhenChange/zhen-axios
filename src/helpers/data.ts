import { isPlainObject } from './utils'

export const transformRequest = (data: any): any => {
  if (isPlainObject(data)) return JSON.stringify(data)

  return data
}

export const transformResponse = (data: any): any => {
  // if (typeof data === 'string') return JSON.parse(data)
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothing
    }
  }

  return data
}
