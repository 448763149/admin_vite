/*
 * @Description:
 * @version:
 * @Author: YangBo
 * @Date: 2020-09-29 15:19:44
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-16 10:42:52
 */
import router from "@/router";
import store from "@/store";
import {getToken} from "@/utils/auth"; // get token from cookie


const whiteList = ["/login"]; // 免登录白名单页面

router.beforeEach(async (to, from, next) => {
	// determine whether the user has logged in
	const hasToken = getToken();
	if (hasToken) {
		if (to.path === "/login") {
			next();
		} else {
			// determine whether the user has obtained his permission roles through getInfo
			// const hasAuths = store.getters.hasAuths;
			// if (hasAuths) {
				next();
			// } else {
			// 	try {
			// 		// generate accessible routes map based on roles
			// 		// const accessRoutes = await store.dispatch("permission/generateRoutes");
			// 		// dynamically add accessible routes
			// 		// router.addRoutes(accessRoutes);
			// 		// hack method to ensure that addRoutes is complete
			// 		// set the replace: true, so the navigation will not leave a history record
			// 		next({
			// 			...to,
			// 			replace: true
			// 		});
			// 	} catch (error) {
			// 		// remove token and go to login page to re-login
			// 		await store.dispatch("user/resetToken");
			// 		// Message.error(error || "Has Error");
			// 		next(`/login?redirect=${to.path}`);
			// 	}
			// }
		}
	} else {
		/* has no token*/
		if (whiteList.indexOf(to.path) !== -1) {
			// in the free login whitelist, go directly
			next();
		} else {
			// other pages that do not have permission to access are redirected to the login page.
			next(`/login?redirect=${to.path}`);
   	}
	}
});

router.afterEach(() => {
	// finish progress bar
	// NProgress.done();
});