/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-15 15:24:08
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-14 09:49:36
 * @detail: 
 * @change: 
 */
import axios from 'axios';
import { error,baseURL } from './message'
// console.log(import.meta.env)
// import.meta.env.VITE_APP_URL || '',
import store from "@/store";
import router from "@/router/index";
const service = axios.create({
  baseURL,
  timeout: 6000, //设置超时
})

// 请求接口拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers["access-token"] = store.getters.token;
  }
  return config;
},error => {
  error(error)
  return Promise.reject(error);
});


service.interceptors.response.use(response => {
  const res = response.data;
  if (res.code !== '0') {
    if (res.code === '51') {
      error({message:"登录过期,登录过期请重新登录"})
      console.log(router)
      // router.push('/login')
      router.replace("/login");
      return Promise.reject(res.message || "登录失败");
    } else {
      if (res.msg) {
        error(res.msg);
      }
      return Promise.reject(res.message || "请求失败");
    }
  }else if (res.code === '0'){
    return res
  }else{
    return Promise.reject(error);
  }
},error => {
  error(error)
  return Promise.reject(error);
})


export default service;


