/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-09 09:37:09
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-19 11:58:13
 * @detail: 
 * @change: 
 */
import { createRouter, createWebHistory,RouteRecordRaw } from 'vue-router'
import { BasicLayout,RouteView, UserLayout } from '@lay/index'



// 各模块菜单引入
import sys from "./modules/sys";
console.log(sys)
// 默认不需要进行身份校验均可访问的路由
const constantRouters: Array<RouteRecordRaw> = [
 
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
    // path: '/:pathMatch(.*)*',
    path: '/404',
    name: '404',
    meta: { title: '404' },
    component: () => import(/* webpackChunkName: "fail" */ '@/pages/404.vue')
  },
  
]


// 动态路由，校验用户权限后动态匹配的路由
export const asyncRoutes:Array<RouteRecordRaw> = [
  sys,
]

// new 转换成工厂函数
const router = createRouter({
  history: createWebHistory(),
  //使用前端路由，当切换到新路由时，想要页面骏到顶部，或者是保持原先的滚动位置，就像重新加
  scrollBehavior: () => ({top: 0,left:0}),
  routes:constantRouters
})



export default router
