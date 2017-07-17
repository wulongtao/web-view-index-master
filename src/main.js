import Vue from 'vue'

//element-ui组件库
import ElementUI from 'element-ui'
//axios异步请求
import axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'querystring'

//cookie
import VueCookie from 'vue-cookie'

//自定义plugin
import utilPlugin from './plugin/util'

//自定义
import App from './App'
import router from './router'
import store from './store'

//css
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(utilPlugin)
Vue.use(VueCookie)


Vue.config.productionTip = false


/**
 * 动态添加路由
 */
// store.commit('setRoutes', ['/user','index1','index2','/system'])
// router.addRoutes(store.getters.getRoutes)
// console.log(store.getters.getRoutes)
/*router.beforeEach((to, from, next) => {
  //TODO token判断是否登录之类
  console.log(from)
  console.log(to)
  next()

})*/


/**
 * 创建axios实例，预定义header
 */
var axiosInstance = axios.create({
  headers: {'Content-Type':'application/x-www-form-urlencoded'},
  transformRequest: [function (data) {
    data = Qs.stringify(data)
    return data
  }],
  transformResponse: [function (response) {

    var errorResponse = {
      result: -1,
      msg: '请求错误'
    }

    if (!Vue.prototype.isJsonString(response) || Vue.prototype.isEmpty(response)) {
      return errorResponse
    }
    return JSON.parse(response)
  }],

})
Vue.use(VueAxios, axiosInstance)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
