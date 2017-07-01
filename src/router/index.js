import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/index/homeView'
import WsPerformance from '@/views/tool/wsPerformanceView'
import example1View from '@/views/demo/example1View'
import example2View from '@/views/demo/example2View'

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
    },{
      path: '/example2-view',
      name: 'example2View',
      component: example2View
    },
    {
      path: '/ws-performance',
      name: 'WsPerformance',
      component: WsPerformance
    }
  ]
})
