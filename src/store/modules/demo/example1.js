/**
 * Created by Administrator on 2017/6/8.
 */
var state = {
  name: 'name example1'
}

const getters = {
  getName: state => state.name
}

const mutations = {
  changeName(state) {
    state.name = "change name example1";
  }
}

const actions = {
  changeName(context) {
    context.commit('changeName')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
