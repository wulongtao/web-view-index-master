//三方
import Vue from 'vue'
import ElementUI from 'element-ui'
//axios异步请求
import axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'querystring'

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


Vue.config.productionTip = false


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
    console.log(response)
    if (!utilPlugin.isJsonString(response)) {
      
    }
    return response;
  }]
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
