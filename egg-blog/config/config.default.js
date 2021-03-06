/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1584623921992_6240'

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  exports.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'blog'
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false
  }

  exports.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  }

  // jsonwebtoken 加密的key
  exports.tokenKey = '@#%90002222'

  return {
    ...config,
    ...userConfig
  }
}
