const Pug = require('koa-pug')
const resolvePath = require('path').resolve
const NOT_PRODUCTION = process.env.NODE_ENV !== 'production'

module.exports = app => {
  const pug = new Pug({
    viewPath: resolvePath(__dirname, '..', 'views'),
    helperPath: resolvePath(__dirname, '..', 'helpers'),
    debug: NOT_PRODUCTION,
    pretty: NOT_PRODUCTION,
    compileDebug: NOT_PRODUCTION,
    locals: {}
  })

  pug.use(app)

  app.use(function* (next) {
    pug.locals.currentURLPath = this.request.path
    yield next
  })
}
