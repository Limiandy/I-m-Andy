/*
 * @Descripttion: 请求接口API
 * @version:
 * @Author: Andy
 * @Date: 2020-02-29 12:32:22
 * @LastEditors: Andy
 * @LastEditTime: 2020-03-01 12:31:37
 */
import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/andy/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}
