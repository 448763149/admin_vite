/*
 * @Description:
 * @version:
 * @Author: YangBo
 * @Date: 2020-09-29 15:19:44
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-19 14:08:15
 */
import router from "@/router";
import store from "@/store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import {RouteRecordRaw } from "vue-router";
import {getToken} from "@/utils/auth"; // get token from cookie


const whiteList = ["/login"]; // 免登录白名单页面
router.beforeEach(async (to, from,next) => {
	NProgress.start();
	// determine whether the user has logged in
	const hasToken = getToken();
	if (hasToken) {
		if (to.path === "/login") {
			NProgress.done();
			// return true;
			next()
		} else {
			const hasAuths = store.getters.hasAuths;
			if (hasAuths) {
				// return true;
				next()
			} else {
				try {
					const accessRoutes = await store.dispatch("permission/generateRoutes");
					accessRoutes.map((item:any)=>{
						router.addRoute(item)
					})
					next({ ...to, replace: true })
						// if (hasRoute(to)) {
						// 	const accessRoutes = await store.dispatch("permission/generateRoutes");
						// 	 const result = generateRoute(to, accessRoutes);
						// 	// result.flag 判断是否有匹配到的路由, false则跳转到404页面
						// 	if (result.flag) { 
						// 		router.addRoute(result.route);
						// 		return to.fullPath;
						// 	} else {
						// 		return "/404";
						// 	}
						// }else{
						// 	// 如果路由存在
						// 	return true;
						// }
				} catch (error) {
		  		// remove token and go to login page to re-login
					await store.dispatch("user/resetToken");
					NProgress.done();
					next(`/login?redirect=${to.path}`)
					// return `/login?redirect=${to.path}`
				}
			}
		}
	} else {
		/* has no token*/
		if (whiteList.indexOf(to.path) !== -1) {
			// in the free login whitelist, go directly
			// return true;
			next()
		} else {
			NProgress.done();
			// return `/login?redirect=${to.path}`
			next(`/login?redirect=${to.path}`)
   	}
	}
});

router.afterEach(() => {
	NProgress.done();
});

interface checkRoute {
  route: RouteRecordRaw;
  flag: boolean;
}
// 判断是否存在已添加的路由
const hasRoute = (to: any): boolean => {
  let flag = true;
	console.log(router.getRoutes())
  router.getRoutes().map((item: any) => {
    // 判断是否存在动态路由
    if (item.path.indexOf("/:") != -1) {
			console.log(item.path.substr(0, item.path.indexOf("/:")))
      if (to.path.indexOf(item.path.substr(0, item.path.indexOf("/:"))) != -1) {
        flag = false;
      }
    } else {
      if (item.path == to.path) {
				flag = false;
      }
    }
  });
  return flag;
};


// 返回当前需要跳转的路由对象
const generateRoute = (to: any, list: Array<any>): checkRoute => {
  let index: number = 0;
  let flag: boolean = false;
  let toArr: string = to.path.substr(0, to.path.indexOf("/", 1));
  list.map((item: any, i: number) => {
    if (item.path == toArr) {
      item.children.map((v: any) => {
        // 判断是否有动态路由
        if (v.path.indexOf("/:") != -1) {
          if (to.path.indexOf(`${v.path.substr(0, v.path.indexOf("/:"))}`) != -1) {
            index = i;
            flag = true;
          }
        } else {
          if (to.path == v.path) {
            index = i;
            flag = true;
          }
        }
      });
    }
  });
  return { route: list[index], flag };
};
