/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-10 11:12:16
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-21 18:03:17
 * @detail: 
 * @change: 
 */
import {reactive } from 'vue';

interface MenuProps {
  menus:any[],
}

export const data = reactive<MenuProps>({
  menus:[{
    path:'/dashboard',
    children:[],
    meta:{
      title: '首页',
      icon:"AppstoreOutlined",
    }
  },{
    path:'/case',
    meta:{
      title: '实践案例',
      icon:"AppstoreOutlined",
    },
    children:[
      { 
        path: '/case/list',
        name: 'case',
        meta: { title: '实践案例列表' },
      }
    ]
  },{
    children:[],
    path:'/about1',
    meta:{
      title: '合作客户',
      icon:"UserOutlined",
    }
  },{
    children:[],
    path:'/about',
    meta:{
      title: '解决方案',
      icon:"UserOutlined",
    }
  }]
})
