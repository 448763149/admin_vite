/*
 * @Description:
 * @version:
 * @Author: YangBo
 * @Date: 2020-09-19 15:44:50
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-29 10:56:12
 */
import Cookies from "js-cookie";

const TokenKey = "Admin-Token";
const UserIdKey = "Admin-UserId";
const loginIdKey = "Admin-LoginId";
const UserNameKey = "Admin-UserName";
const UserInfoKey = "Admin-UserInfo";

export function getToken() {
	return Cookies.get(TokenKey);
}

export function setToken(token:String) {
	return Cookies.set(TokenKey, token);
}

export function removeToken() {
	return Cookies.remove(TokenKey);
}

export function getUserId() {
	return Cookies.get(UserIdKey);
}

export function setUserId(userId:String) {
	return Cookies.set(UserIdKey, userId);
}

export function removeUserId() {
	return Cookies.remove(UserIdKey);
}

export function getLoginLeagueId() {
	return Cookies.get(loginIdKey);
}


export function getUserName() {
	return Cookies.get(UserNameKey);
}

export function setUserName(userName:String) {
	return Cookies.set(UserNameKey, userName);
}


export function  setUserInfo (userInfo:any) {
	return Cookies.set(UserInfoKey, userInfo);
}

export function  getUserInfo () {
	return Cookies.get(UserInfoKey) ? Cookies.get(UserInfoKey) : "";
}
