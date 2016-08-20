const router = require('koa-router')()
const routes = require('./helpers/routes')

routes.all().forEach(({basename, path}) => {
  router.get(path, function* () {
    this.render(basename)
  })
})

module.exports = router
