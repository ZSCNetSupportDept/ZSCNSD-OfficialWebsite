/**
 * Created by Clovin on 20/12/2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {}
  })
}
