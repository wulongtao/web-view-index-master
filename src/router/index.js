import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/index/homeView'
import WsPerformance from '@/views/tool/wsPerformanceView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ws-performance',
      name: 'WsPerformance',
      component: WsPerformance
    }
  ]
})
