'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  // 获取文章列表
  async index() {
    const sql = `
      select a.id,a.type_id,a.title,a.introduction,a.view_count,DATE_FORMAT(a.add_time,'%Y-%m-%d %H:%i:%S') as add_time ,
      t.id as tid,t.type_name,t.order_no from article a left join type t on a.type_id = t.id
    `

    const result = await this.app.mysql.query(sql)

    this.ctx.body = { status: 0, body: result }
  }

  // 根据id获取文章
  async article() {
    const sql = `
      select a.id,a.type_id,a.title,a.introduction,a.content,a.view_count,DATE_FORMAT(a.add_time,'%Y-%m-%d %H:%i:%S') as add_time ,
      t.id as tid,t.type_name from article a left join type t on a.type_id = t.id where a.id = ?
    `

    const result = await this.app.mysql.query(sql, [this.ctx.params.id])

    this.ctx.body = { status: 0, body: result[0] }
  }

  // 获取类型列表
  async types() {
    const sql = `select * from type`

    const result = await this.app.mysql.query(sql)

    this.ctx.body = { status: 0, body: result }
  }
}

module.exports = HomeController
