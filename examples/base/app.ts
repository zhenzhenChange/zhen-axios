import zhenAxios from '../../src/index'

/* GET 请求示例 */
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

/* POST 请求示例 */
zhenAxios({
  method: 'post',
  url: '/base/post',
  data: { foo: 'foo', bar: 'bar' }
})

const data = new Int32Array([37, 21])
zhenAxios({
  method: 'post',
  url: '/base/buffer',
  data
})

const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)
zhenAxios({
  method: 'post',
  url: '/base/post',
  data: searchParams
})

zhenAxios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json, text/plain, */*'
  },
  data: { json: 'json', bar: 'jsonBar' }
})

/* Promise 请求示例 */
zhenAxios({
  method: 'post',
  url: '/base/post',
  data: { name: 'zhenzhen', age: 22 }
})
  .then(result => console.log(result))
  .catch(error => console.log(error))

zhenAxios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: { foo: 'foo', bar: 'bar' }
})
  .then(result => console.log(result))
  .catch(error => console.log(error))
