/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-02-25 14:13:59
 * @LastEditors: Andy
 * @LastEditTime: 2020-03-02 09:37:36
 */
import Mock from 'mockjs'

const List = []
const count = 100

const baseContent = 'I am testing data, I am testing data.'
const image_url = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

Mock.Random.extend({
  category: function(date) {
    var categorys = ['HTML', 'CSS', 'JavaScript', 'VUE', 'BootStrap']
    return this.pick(categorys)
  }
})

for (let i = 0; i < count; i++) {
  Mock.Random.category()
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    title: '@title(2, 4)',
    content_short: 'mock data',
    content: baseContent,
    display_time: '@datetime',
    pageviews: '@integer(300, 500)',
    image_url,
    category: '@category'
  }))
}

export default [
  {
    url: '/andy/article/list',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })
      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  }
]
