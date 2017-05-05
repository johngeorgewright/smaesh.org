const Koa = require('koa')
const pkg = require('../package.json')
const kStatic = require('koa-static')
const joinPath = require('path').join
const templating = require('./middleware/templating')
const router = require('./router')

const PORT = process.env.PORT || 3000
const PUBLIC_DIR = joinPath(__dirname, 'public')

const app = new Koa()

templating(app)
app.use(kStatic(PUBLIC_DIR))
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT, () => {
  console.log(`${pkg.name}v${pkg.version} listening to http://localhost:${PORT}`)
})
