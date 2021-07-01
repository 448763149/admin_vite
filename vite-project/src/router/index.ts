/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-09 09:37:09
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-25 16:59:18
 * @detail: 
 * @change: 
 */
import { createRouter, createWebHistory,RouteRecordRaw } from 'vue-router'
import { BasicLayout,RouteView, UserLayout } from '@lay/index'
const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/dashboard',
    children: [
      { path: '/dashboard', meta: { title: '首页' },name: 'dashboard', component: () => import('@/pages/home.vue') },
      { path: '/about', name: 'about',component: () => import('@/pages/about.vue') },
      {
        path: '/case',
        name: 'case',
        redirect: '/case/list',
        component: RouteView,
        meta: { title: '实践案例',  permission: ['dashboard'] },
        children: [
          { 
            path: '/case/list',
            name: 'case',
            meta: { title: '实践案例列表' },
            component: () => import('@/pages/case/index.vue'),
          },
          { 
            path: '/case/add',
            name: 'caseAdd',
            meta: { title: '实践案例新增' },
            component: () => import('@/pages/case/add/index.vue'),
          }
        ]
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: UserLayout,
    meta: { title: '登录' },
    redirect: '/login',
    children: [
      { 
        path: '/login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import('@/pages/user/login/login.vue'),
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: { title: '404' },
    component: () => import(/* webpackChunkName: "fail" */ '@/pages/404.vue')
  }
]
// new 转换成工厂函数
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
