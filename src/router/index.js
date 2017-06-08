import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/index/homeView'
import WsPerformance from '@/views/tool/wsPerformanceView'
import example1View from '@/views/demo/example1View'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/example1-view',
      name: 'example1View',
      component: example1View
    },
    {
      path: '/ws-performance',
      name: 'WsPerformance',
      component: WsPerformance
    }
  ]
})
