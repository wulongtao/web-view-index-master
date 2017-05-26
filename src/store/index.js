/**
 * Created by Administrator on 2017/5/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    goods: {},
    todos: [
      {id: 1, text: '...', done: true},
      {id: 1, text: '...', done: false},
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    increment2(state, payload) {
      state.goods = payload
    }
  }
})
