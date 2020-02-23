const router = require('koa-router')()

router.prefix('/api/user')

router.get('/', (ctx, next) => {
  ctx.body = 'this is a users response!'
})

router.get('/bar', (ctx, next) => {
  ctx.body = 'this is a users/bar response'
})

router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body
  ctx.body = {
    errno: 0,
    username,
    password
  }
})

router.get('/session-test', (ctx, next) => {
  if (ctx.session.viewCount == null) {
    ctx.session.viewCount = 0
  }
  ctx.session.viewCount++
  ctx.body = {
    errno: 0,
    viewCount: ctx.session.viewCount
  }
})

module.exports = router
