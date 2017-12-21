/**
 * Created by Clovin on 20/12/2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

/* eslint-disable no-new */
const debug = process.env.NODE_ENV !== 'production'

export function createStore () {
  return new Vuex.Store({
    state: {},
    actions,
    mutations
  })
}
