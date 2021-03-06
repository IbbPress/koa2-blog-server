const router = require('koa-router')()

router.prefix('/api/blog')

router.get('/list', (ctx, next) => {
  const query = ctx.query
  ctx.body = {
    errno: 0,
    query,
    data: ['获取博客列表']
  }
})

router.get('/bar', (ctx, next) => {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
