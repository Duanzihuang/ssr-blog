module.exports = app => {
  const { router, controller } = app
  router.get('/api/articles', controller.web.home.index)
  router.get('/api/article/:id', controller.web.home.article)
  router.get('/api/types', controller.web.home.types)
}
