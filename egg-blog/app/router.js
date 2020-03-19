'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./routers/web')(app)
  require('./routers/admin')(app)
}
