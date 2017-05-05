const router = require('koa-router')()
const routes = require('./helpers/routes')

routes.all().forEach(({basename, path}) => {
  router.get(path, ctx => {
    ctx.render(basename)
  })
})

module.exports = router
