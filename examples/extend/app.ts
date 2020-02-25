import zhenAxios from '../../src/index'

/* Extend 请求示例 */
zhenAxios({
  method: 'post',
  url: '/extend/post',
  data: { msg: 'Hello' }
})

zhenAxios('/extend/post', {
  method: 'post',
  data: { msg: 'TypeScript Go' }
})

zhenAxios.request({
  method: 'post',
  url: '/extend/post',
  data: { msg: 'TypeScript' }
})

zhenAxios.get('/extend/get')
zhenAxios.head('/extend/head')
zhenAxios.delete('/extend/delete')
zhenAxios.options('/extend/options')

zhenAxios.put('/extend/put', { msg: 'put' })
zhenAxios.post('/extend/post', { msg: 'post' })
zhenAxios.patch('/extend/patch', { msg: 'patch' })

interface ResponseData<T = any> {
  code: number
  result: T
  message: string
}

interface User {
  username: string
  password: string
}

function getUser<T>() {
  return zhenAxios<ResponseData<T>>('/extend/user')
    .then(res => res.data)
    .catch(err => console.log(err))
}

async function test() {
  const user = await getUser<User>()
  if (user) console.log(user.result.username)
}

// tslint:disable-next-line: no-floating-promises
test()
