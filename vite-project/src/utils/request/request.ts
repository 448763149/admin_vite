/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-15 15:24:08
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-23 15:20:49
 * @detail: 
 * @change: 
 */
// 首先引入axios和上一步封装的cookie方法
import axios, { AxiosInstance } from 'axios';
import { error,baseURL } from './message'
// console.log(import.meta.env)
// import.meta.env.VITE_APP_URL || '',
export class Interceptors {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL,
      timeout: 6000, //设置超时
    })
  }
  // 初始化拦截器
  init() {
    // 请求接口拦截器
    this.instance.interceptors.request.use(
      config => {
        // 判断一下是否有cookie 如果有的话则把cookie放入请求头中
        // if (getToken()) {
        //   config.headers[getTokenKey()] = getToken();
        //   config.headers[getRefreshTokenKey()] = getRefreshToken();
        // }
        return config
      }, err => {
        error(err)
      }
    )

    // 响应拦截器
    this.instance.interceptors.response.use(response => {
        const res = response.data
        if (!response.status.toString().startsWith("2") || res.code === -1) {
          // 如果状态码不是2开头或者接口code返回-1 则是返回错误信息
          error({message:"系统错误,请检查API是否正常！"})
          return;
        }
        if (res.code !== 0) {
          if (res.code === -3) {
            error({message:"登录过期,登录过期请重新登录"})
            // removeToken()
          } else {
            if (res.msg) {
              console.error(res.msg);
            }
          }
          return Promise.resolve(res);
        } else {
          // 返回成功则把token存储一下
          const headers = response.headers;
          const token = headers.token;
          const refresh_token = headers["refresh-token"];
          // if (token && refresh_token) {
          //   setToken(token);
          //   setRefreshToken(refresh_token);
          // }
          return res;
        }
      },error => {
        if (error.message === "Request failed with status code 500") {
          error(error)
          return;
        }
        let code = -110;
        if (error && error.response && error.response.status) {
          code = error.response.status;
          // 登陆过期
          if (code === 401 || code === -3) {
            // removeToken()
          }
        } else {
          error(error)
        }
        const err = { errCode: -110, errMsg: error.message || "Error" };
        return Promise.resolve(err);
      });
  }
   // 返回一下
  getInterceptors() {
    return this.instance
  }
}


