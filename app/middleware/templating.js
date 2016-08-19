const Pug = require('koa-pug')
const resolvePath = require('path').resolve
const PRODUCTION = process.env.NODE_ENV !== 'production'

module.exports = app => {
  const pug = new Pug({
    viewPath: resolvePath(__dirname, '..', 'views'),
    // helperPath: resolvePath(__dirname, '..', 'helpers'),
    debug: PRODUCTION,
    pretty: PRODUCTION,
    compileDebug: PRODUCTION,
    locals: {}
  })

  pug.use(app)

  app.use(function* (next) {
    pug.locals.currentURLPath = this.request.path
    yield next
  })
}
