const Koa = require('koa')
const Router = require('koa-router')
const mockList = require('./mock')

const app = new Koa()
const router = new Router()

mockList.forEach(item => {
  const { url, method, response } = item
  router[method](url, ctx => {
    ctx.body = response()
  })
})

app.use(router.routes())
app.listen(3002)