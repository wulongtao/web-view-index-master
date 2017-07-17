/**
 * Created by Administrator on 2017/5/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'

//global getters
import {state} from './state'
//global getters
import {getters} from './getters'
//global mutations
import {mutations} from './mutations'

//ext modules
import httpUrl from './modules/common/http-url'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  modules: {
    httpUrl
  },
  getters: getters,
  mutations: mutations
})
