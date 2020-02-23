const toString = Object.prototype.toString

export const isDate = (date: any): date is Date => toString.call(date) === '[object Date]'

export const isObject = (object: any): object is Object => object && typeof object === 'object'
