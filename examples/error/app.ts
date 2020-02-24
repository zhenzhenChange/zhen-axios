import zhenAxios, { AxiosError } from '../../src/index'

/* Error 请求示例 */
zhenAxios({
  method: 'get',
  url: '/error/get404'
})
  .then(res => console.log(res))
  .catch(err => console.log(err))

zhenAxios({
  method: 'get',
  url: '/error/get'
})
  .then(res => console.log(res))
  .catch(err => console.log(err))

setTimeout(() => {
  zhenAxios({
    method: 'get',
    url: '/error/get'
  })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}, 5000)

zhenAxios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
})
  .then(res => console.log(res))
  .catch((err: AxiosError) => {
    console.log(err.message)
    console.log(err.config)
    console.log(err.code)
    console.log(err.isAxiosError)
    console.log(err.request)
    console.log(err.stack)
    console.log(err.name)
  })
