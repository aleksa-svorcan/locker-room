import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    getters,
    mutations,
    actions,
    state

  })

  return Store
}
