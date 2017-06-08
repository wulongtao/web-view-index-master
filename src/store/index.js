/**
 * Created by Administrator on 2017/5/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'

//global getters
import {getters} from './getters'
//global mutations
import {mutations} from './mutations'

//ext modules
import example1 from './modules/demo/example1'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    goods: [],
    todos: [
      {id: 1, text: '...', done: true},
      {id: 1, text: '...', done: false},
    ]
  },
  modules: {
    example1,
  },
  getters: getters,
  mutations: mutations
})
