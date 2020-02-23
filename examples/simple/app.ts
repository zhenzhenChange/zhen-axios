import zhenAxios from '../../src/index'

zhenAxios({
  method: 'get',
  url: '/simple/get',
  params: { a: 1, b: 2 }
})
