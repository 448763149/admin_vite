/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-09 09:37:09
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-16 17:20:39
 * @detail: 
 * @change: 
 */
import { BasicLayout} from '@lay/index'
const routers = {
    path: '/sys',
    name: 'sys',
    component: BasicLayout,
    meta: { title: '系统管理' },
    redirect: '/sys/menu',
    children: [
      { 
        path: '/sys/menu',
        name: 'menu',
        meta: { title: '菜单' },
        component: () => import('@/pages/sys/menu/index.vue'),
      }
    ]
};


export default routers
