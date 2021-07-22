/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-17 19:45:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-25 10:49:26
 * @detail: 
 * @change: 
 */

// 导入组件，组件必须声明 name
import hTree from './src/index.vue'
 
// 为组件提供 install 安装方法，供按需引入
hTree.install = function (app:any) {
  app.component(hTree.name, hTree)
}
 
// 默认导出组件
export default hTree
