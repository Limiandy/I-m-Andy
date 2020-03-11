/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-02-04 13:38:54
 * @LastEditors  : Andy
 * @LastEditTime : 2020-02-08 19:15:52
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/home/index'),
          name: 'Home'
        }
      ]
    }
  ]
})
