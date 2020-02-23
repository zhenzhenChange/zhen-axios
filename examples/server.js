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

app.use(router)

const port = process.env.PORT || 8888
module.exports = app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))