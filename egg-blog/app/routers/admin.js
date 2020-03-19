module.exports = app => {
  const { router, controller } = app
  router.get('/admin', controller.admin.home.index)
}
