/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-02-25 09:43:49
 * @LastEditors: Andy
 * @LastEditTime: 2020-02-25 12:12:22
 */
const state = {
  view: 'home'
}

const mutations = {
  SWITCH_VIEWS: (state, view) => {
    state.view = view
  }
}

const actions = {
  switchViews({ commit }, { view }) {
    commit('SWITCH_VIEWS', view)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
