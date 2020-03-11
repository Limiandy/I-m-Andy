/*
 * @Descripttion: 相当于 后端 routers 文件 （中间件）
 * @version:
 * @Author: Andy
 * @Date: 2020-02-28 14:31:55
 * @LastEditors: Andy
 * @LastEditTime: 2020-03-01 12:38:03
 */

import Mock from 'mockjs'
import { param2Obj } from '../src/utils'

import article from './article'

const mocks = [

  ...article

]

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
export function mockXHR() {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function() {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respond) {
    return function(options) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}

// for mock server
const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
    type: type || 'get',
    response(req, res) {
      console.log('request invoke:' + req.path)
      // instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
      // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof
      res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
    }
  }
}
// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 返回一个新的数组给 mock-server [{url, type, 响应内容}, {}, ...]
export default mocks.map(route => {
  return responseFake(route.url, route.type, route.response)
})
