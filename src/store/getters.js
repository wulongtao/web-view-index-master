/**
 * Created by Administrator on 2017/6/8.
 */
export const  getters = {
  doneTodos(state) {
    return state.todos.filter(todo => todo.done)
  },
  doneTodosCount(state, getters) {
    return getters.doneTodos.length
  }
}
