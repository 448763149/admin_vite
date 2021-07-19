/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-09 09:37:09
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-19 15:01:56
 * @detail: 
 * @change: 
 */
import { RouteView,BasicLayout} from '@lay/index'
const routers = {
  path: '/sys',
  name: 'sys',
  component: BasicLayout,
  meta: { title: '系统管理' },
  children: [{
		path: "/sys/menu",
		name: "menu",
    meta: { title: '菜单' },
		component: RouteView,
    redirect: '/sys/menu/list',
    children: [
      { 
        path: '/sys/menu/list',
        name: 'menu',
        meta: { title: '菜单' },
        component: () => import('@/pages/sys/menu/index.vue'),
      },
      { 
        path: '/sys/menu/add',
        name: 'add',
        meta: { title: '菜单新增' },
        component: () => import('@/pages/sys/menu/add/index.vue'),
      },
    ]
  }]
}


export default routers
