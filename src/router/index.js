import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/index/loginView'
import Home from '@/views/home/homeView'

import Hello from '@/views/demo/example3View'
import Hello0 from '@/views/demo/Hello0'
import a from '@/views/demo/a'

import System from '@/views/system/systemView'
import User1 from '@/views/user/user1View'
import User2 from '@/views/user/user2View'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/hello',
    name: 'Hello',
    component: Hello,
    children: [
      {path:'/hello0', name:'hello0', component:Hello0},
      {path:'/a', name:'a', component:a},
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    /*children: [
      { path: '/user1', component: User1, name: '用户管理1'},
      { path: '/user2', component: User2, name: '用户管理2'},
    ]*/
  },
  {
    path: '/user',
    name: 'user',
    component: Home,
    redirect: '/user/index1',
    children: [
      { path: 'index1', component: User1, name: '用户管理1'},
      { path: 'index2', component: User2, name: '用户管理2'},
    ]
  },{
    path: '/system',
    name: 'system',
    component: Home,
    redirect: '/system/index',
    noDropdown: true,
    children: [
      { path: 'index', component: System, name: '系统管理'},
    ]
  },
]

export default new Router({
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/user',
    name: '用户',
    component: Home,
    redirect: '/user/index1',
    children: [
      { path: 'index1', component: User1, name: '用户管理1'},
      { path: 'index2', component: User2, name: '用户管理2'},
    ]
  },{
    path: '/system',
    name: 'system',
    component: Home,
    redirect: '/system/index',
    noDropdown: true,
    children: [
      { path: 'index', component: System, name: '系统管理'},
    ]
  },
]
