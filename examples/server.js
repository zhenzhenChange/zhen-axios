const express = require('express')
const webpack = require('webpack')
const bodyParser = require('body-parser')
const WebpackConfig = require('./webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const compiler = webpack(WebpackConfig)

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/__build__/',
    stats: { colors: true, chunks: false }
  })
)

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

router.get('/simple/get', (req, res) => {
  res.json({ code: 0, message: 'Frist Examples', data: { age: 22, name: 'zhenzhen' } })
})

router.get('/base/get', (req, res) => res.json(req.query))

router.post('/base/post', (req, res) => res.json(req.body))

router.post('/base/buffer', (req, res) => {
  const msg = []
  req.on('data', chunk => {
    if (chunk) msg.push(chunk)
  })
  req.on('end', () => {
    let buf = Buffer.concat(msg)
    res.json(buf.toJSON())
  })
})

router.get('/error/get', (req, res) => {
  if (Math.random() > 0.5) res.json({ msg: 'Hello TS' })
  else {
    res.status(500)
    res.end()
  }
})

router.get('/error/timeout', (req, res) => setTimeout(() => res.json({ msg: 'Timeout' }), 3000))

router.get('/extend/get', (req, res) => res.json({ msg: 'ok' }))
router.get('/extend/user', (req, res) => res.json({ result: { username: 'zhenzhen' } }))
router.head('/extend/head', (req, res) => res.end())
router.delete('/extend/delete', (req, res) => res.end())
router.options('/extend/options', (req, res) => res.end())

router.put('/extend/put', (req, res) => res.json(req.body))
router.post('/extend/post', (req, res) => res.json(req.body))
router.patch('/extend/patch', (req, res) => res.json(req.body))

app.use(router)

const port = process.env.PORT || 8888
module.exports = app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))
