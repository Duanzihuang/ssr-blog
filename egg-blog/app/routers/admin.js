module.exports = app => {
  const { router, controller } = app
  router.get('/admin', controller.admin.home.index)

  // 用户相关
  router.post('/admin/user', controller.admin.user.login)
}
