/*
 * @Descripttion: sweetalert 弹窗美化插件
 * @version: 
 * @Author: Andy
 * @Date: 2020-02-03 10:15:24
 * @LastEditors  : Andy
 * @LastEditTime : 2020-02-03 10:28:46
 */

import swal from 'sweetalert'

export default {
  install: (Vue) => {
    swal.setDefaults ({
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(140,212,245)',
      cancelButtonColor: 'rgb(193,193,193)'
    })
    Vue.swal = swal

    Vue.prototype.$swal = swal
  }
}