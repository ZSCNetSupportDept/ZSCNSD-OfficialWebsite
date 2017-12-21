/**
 * Created by Clovin on 21/12/2017.
 */

import {fetchWorkList} from '../../../api'

export default {
  namespaced: true,
  state: () => ({
    workList: {}
  }),
  mutations: {
    SET_WORK_LIST (state, value) {
      state.workList = value
    }
  },
  actions: {
    FETCH_WORK_LIST ({ commit }) {
      return fetchWorkList().then(data => {
        commit('SET_WORK_LIST', data)
      })
    }
  }
}