/*
 * @Description: 用户相关数据状态管理
 * @version:
 * @Author: HuQiang
 * @Date: 2021-09-19 15:37:44
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-16 15:24:40
 */
import { message as Message} from 'ant-design-vue';
import {login} from '@/api/common'
import {
  getToken,
  setToken,
  removeToken,
  getUserId,
  setUserId,
  removeUserId,
  getUserName,
  setUserName,
  setUserInfo,
  getUserInfo
} from "@/utils/auth";

const state = {
  token: getToken(),
  userId: getUserId(),
  userName: getUserName(),
  userInfo: getUserInfo()
};

const mutations = {
  SET_TOKEN: (state: { token: any; }, token: any) => {
    state.token = token;
  },
  SET_USERID: (state: { userId: any; }, userId: any) => {
    state.userId = userId;
  },
  SET_USERNAME: (state: { userName: any; }, name: any) => {
    state.userName = name;
  },
  SET_USERINFO: (state: { userInfo: any; }, orgData: any) => {
    state.userInfo = orgData;
  }
};

const actions = {
  // user login
  login({ commit }: any, loginInfo: any) {
    return new Promise((resolve, reject) => {
      login(loginInfo).then((res:any) => {
          const { data, code, message } = res;
          if (code == "0") { // 登录成功
              const { token, id ,userName} = data;
              commit("SET_TOKEN", token);
              setToken(token);
              commit("SET_USERID", id);
              setUserId(id);
              commit("SET_USERNAME", userName);
              setUserName(userName);
              resolve(res);
          } else if(code == "51"){
            Message.error(message);
            resolve(res);
          }else{
            reject(message);
          }
      }).catch(error => {
          reject(error);
      });
    });
  },

  // user logout
  logout({ commit, dispatch }:any) {
    return new Promise<void>(resolve => {
      // 清空token
      commit("SET_TOKEN", "");
      removeToken();
      // 清空权限及菜单信息
      // dispatch("permission/resetAuths", null, { root: true });
      // resetRouter(); // 重置路由
      resolve();
    });
  },

  // remove token
  resetToken({ commit }:any) {
    return new Promise(resolve => {
      commit("SET_TOKEN", "");
      removeToken();
      commit("SET_USERID", "");
      removeUserId();
      resolve('');
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};