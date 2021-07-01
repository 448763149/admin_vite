/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:41:46
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-23 16:06:05
 * @detail: 
 * @change: 
 */


// 导入組件
import hForm from './h-form'
import hQuery from './h-query'
import hCrumbs from './h-crumbs'
import hHhelloworld from './helloworld'
 
// 存储组件列表
const components = [
  hForm,
  hQuery,
  hHhelloworld,
  hCrumbs
]
 
// 定义 install 方法，接收 app 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install:any = function (app:any):void{
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => app.component(component.name, component))
}
export default {
  // 导出的对象必须具有 install，才能被 app.use() 方法安装
  install,
  // 组件列表
  ...components
}
