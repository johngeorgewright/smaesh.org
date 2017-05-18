const Pug = require('koa-pug')
const resolvePath = require('path').resolve
const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = app => {
  const pug = new Pug({
    app,
    viewPath: resolvePath(__dirname, '..', 'views'),
    helperPath: resolvePath(__dirname, '..', 'helpers'),
    debug: !PRODUCTION,
    pretty: !PRODUCTION,
    compileDebug: !PRODUCTION,
    locals: {}
  })

  app.use((ctx, next) => {
    pug.locals.currentURLPath = ctx.request.path
    return next()
  })
}
