/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-02-03 09:17:57
 * @LastEditors: Andy
 * @LastEditTime: 2020-02-28 13:47:29
 */
import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import './styles/base.css'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import swal from './vendor/sweetalert' // 弹窗美化

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// icons
import './assets/ionicons/css/ionicons.min.css'
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
Vue.config.productionTip = false
Vue.use(swal)
Vue.use(VueAxios, axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
