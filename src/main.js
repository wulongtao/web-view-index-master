//三方
import Vue from 'vue'
import ElementUI from 'element-ui'

//自定义
import App from './App'
import router from './router'
import store from './store'

//css
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
