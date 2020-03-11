/*
 * @Descripttion: 建立 Mock 数据路由服务,由cohkidr监听mock目录内文件的变化，增加及删除路由，构建程序之前加载
 * @version:
 * @Author: Andy
 * @Date: 2020-02-25 12:30:34
 * @LastEditors: Andy
 * @LastEditTime: 2020-02-29 21:36:45
 */
const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const path = require('path')

const mockDir = path.join(process.cwd(), 'mock')

/**
 * @name: registerRoutes
 * @msg: 注册路由
 * @param { Function } app
 * @returns { Number } mockRoutesLength && mockStartIndex
 */
function registerRoutes(app) {
  let mockLastIndex
  const { default: mocks } = require('./index.js')
  for (const mock of mocks) {
    // app.get('/url', callback)
    // 有多少个 mock 对象就注册多少个路由，类似于 express的 app.get('/index', function(req, res) { ... })
    app[mock.type](mock.url, mock.response)
    // 最后一个mock对象的index
    mockLastIndex = app._router.stack.length
  }
  // 共有多少个路由对象
  const mockRoutesLength = Object.keys(mocks).length
  return {
    mockRoutesLength: mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength
  }
}

/**
 * 从node缓存对象中删除已注册的路由
 * Object.keys(require.cache) 返回缓存对象路径数组
 * forEach遍历这个数组
 * i.includes(mockDir) 检测数组中是否有mockDir这个路径
 * 如果有从缓存对象中删除这个路径
 */
// http://nodejs.cn/api/modules/require_cache.html
function unregisterRouters() {
  Object.keys(require.cache).forEach(i => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)]
    }
  })
}
/**
 * 相当于后端服务器中 app.js 文件的作用，当前端发生接口请求时，执行
 */
module.exports = app => {
  require('@babel/register')
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  const mockRoutes = registerRoutes(app)
  var mockRoutesLength = mockRoutes.mockRoutesLength
  var mockStartIndex = mockRoutes.mockStartIndex
  /**
   * 监听 mockDir 目录内各文件内容的变化，当发生改变或添加事件时：
   * app._router.stack.splice(mockStartIndex, mockRoutesLength) 从路由表中删除所有 mock 路由
   * unregisterRouters() 从node缓存对象中删除所有 mock 缓存目录
   * 重新添加路由表
   */
  chokidar.watch(mockDir, {
    ignored: /mock-server/,
    ignoreInitial: true
  }).on('all', (event, path) => {
    if (event === 'change' || event === 'add') {
      try {
        app._router.stack.splice(mockStartIndex, mockRoutesLength)
        unregisterRouters()
        const mockRoutes = registerRoutes(app)
        mockRoutesLength = mockRoutes.mockRoutesLength
        mockStartIndex = mockRoutes.mockStartIndex
        console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`))
      } catch (error) {
        console.log(chalk.redBright(error))
      }
    }
  })
}
