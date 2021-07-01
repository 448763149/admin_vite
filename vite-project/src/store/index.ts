/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-09 09:37:09
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-16 09:57:59
 * @detail: 
 * @change: 
 */
import { createStore } from 'vuex'
import getters from "./getters";
// webpack 动态引入
// https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context("./modules", true, /\.ts$/);

// vite 动态导入有两种方式
// import.meta.glob: 通过动态导入默认懒加载，通过遍历加 then 方法可拿到对应的模块文件详情信息
// import.meta.globEager: 直接引入所有的模块, 即静态 import; 我的就是使用该方案打包部署报错
const modulesFiles:any = import.meta.globEager("./modules/**/*.ts")
const modules = Object.keys(modulesFiles).reduce((modules:any, modulePath:string) => {
	// set './app.js' => 'app'
	const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, "$1");
	const value = modulesFiles[modulePath];
	modules[moduleName] = value.default;
	return modules;
}, {});

// console.log(modules)
export default createStore({
  modules,
  getters
})
