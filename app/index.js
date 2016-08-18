const koa = require('koa')
const kStatic = require('koa-static')
const Pug = require('koa-pug')
const pathHelper = require('path')

const PORT = process.env.PORT || 3000
const PUBLIC_DIR = pathHelper.resolve(__dirname, '..', 'public')
const PRODUCTION = process.env.NODE_ENV !== 'production'

const app = koa()
const pug = new Pug({
  viewPath: pathHelper.join(__dirname, 'views'),
  debug: PRODUCTION,
  pretty: PRODUCTION,
  compileDebug: PRODUCTION
})

app.use(pug.middleware)

app.use(kStatic(PUBLIC_DIR))

app.use(function* () {
  this.render('home.pug')
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
