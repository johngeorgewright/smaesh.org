const router = require('koa-router')()

router.get('/', function* (next) {
  this.render('home')
})

module.exports = router
