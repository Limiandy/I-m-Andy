/*
 * @Descripttion: 
 * @version: 
 * @Author: Andy
 * @Date: 2020-02-08 14:19:29
 * @LastEditors: Andy
 * @LastEditTime: 2020-02-25 12:27:51
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  console.log(modules)
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters
})

export default store