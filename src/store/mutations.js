/**
 * Created by Administrator on 2017/6/8.
 */
export const mutations = {
  increment(state) {
    state.count++;
  },
  pushGoods(state, payload) {
    state.goods.push(payload)
  }
}
