/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-20 17:46:41
 * @detail: 
 * @change: 
 */

// 导入组件，组件必须声明 name
import qwCrumbs from './src/index'
// 为组件提供 install 安装方法，供按需引入
qwCrumbs.install = function (app:any) {
  app.component(qwCrumbs.name, qwCrumbs)
}
 
// 默认导出组件
export default qwCrumbs
