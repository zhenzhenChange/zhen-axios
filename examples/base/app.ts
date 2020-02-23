// import axios, {AxiosError} from '../../src/index'
// import { AxiosTransformer } from '../../src/types'

/* const instance = axios.create({
  transformRequest: [(function (data) {
    console.log(data, 'data')
    data.b = 3
    return data
  }), ...(axios.defaults.transformRequest as AxiosTransformer[])]
}) */

// instance({
//   url: '/base/post',
//   data: {
//     a: 2
//   },
//   method: 'post'
// }).then((res) => {
//   console.log(res, 'res')
// })

import zhenAxios from '../../src/index'

zhenAxios({
  method: 'get',
  url: '/base/get',
  params: { foo: ['bar', 'baz'] }
})

zhenAxios({
  method: 'get',
  url: '/base/get',
  params: { foo: { bar: 'baz' } }
})

const date = new Date()

zhenAxios({
  method: 'get',
  url: '/base/get',
  params: { date }
})

zhenAxios({
  method: 'get',
  url: '/base/get',
  params: { foo: '@:$, ' }
})

zhenAxios({
  method: 'get',
  url: '/base/get',
  params: { foo: 'bar', baz: null }
})

zhenAxios({
  method: 'get',
  url: '/base/get#hash',
  params: { foo: 'bar' }
})

zhenAxios({
  method: 'get',
  url: '/base/get?foo=bar',
  params: { bar: 'zhenzhen' }
})
