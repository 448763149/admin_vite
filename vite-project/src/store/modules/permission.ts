/*
 * @Description:
 * @version:
 * @Author: HuQiang
 * @Date: 2021-06-29 16:12:06
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-16 17:51:21
 */
import { asyncRoutes } from "@/router";

const state = {
	hasAuths: false,  // 是否已获取菜单权限
	menus: [],  // 组装后的菜单列表
	lastMenus: []  // 所有的末级页面菜单列表
};
interface stateType {
  hasAuths: boolean;
  menus: Array<any>;
	lastMenus: Array<any>;
}
const mutations = {
	SET_AUTHS: (state:stateType, authState: boolean) => {
		state.hasAuths = authState;
	},
	SET_MENUS: (state:stateType, menus:Array<any>) => {
		state.menus = menus;
	},
	SET_LASTMENUS: (state:stateType, menus:Array<any>) => {
		state.lastMenus = menus;
	}
};

const actions = {
	// 设置动态路由及菜单
	generateRoutes({ commit }:any) {
		return new Promise(resolve => {
			let accessedRoutes = asyncRoutes;
				// console.log("根据权限添加的异步路由",accessedRoutes);
				commit("SET_AUTHS", true);
				resolve(accessedRoutes);
		});
	},
	// 重置路由及菜单
	resetAuths({ commit }:any) {
		commit("SET_AUTHS", false);
		commit("SET_MENUS", []);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
