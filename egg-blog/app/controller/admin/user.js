'use strict'
const jwt = require('jsonwebtoken')
const Controller = require('egg').Controller

class UserController extends Controller {
  async login() {
    const params = this.ctx.request.body
    const result = { status: 0, message: '登录成功', token: null }

    const user = await this.ctx.app.mysql.get('user', params)
    if (user) {
      const tokenKey = this.ctx.app.config.tokenKey
      result.token = jwt.sign(
        { id: user.id, username: user.username },
        tokenKey
      )
    } else {
      result.status = 1
      result.message = '用户名或密码错误'
    }

    this.ctx.body = result
  }
}

module.exports = UserController
