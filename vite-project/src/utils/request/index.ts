/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-15 15:24:08
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-23 15:21:00
 * @detail: 
 * @change: 
 */
import { AxiosPromise, AxiosResponse } from "axios";
import { Interceptors } from "./request";

// 请求配置
export class HttpServer {
  axios: any;
  // 获取axios实例
  constructor() {
    this.axios = new Interceptors().getInterceptors();
  }
  // 简单封装一下方法
  request(config: any): AxiosPromise {
    return new Promise((resolve, reject) => {
      this.axios(config).then((res: AxiosResponse) => {
        resolve(res.data);
      }).catch((err: any) => {
        reject(err)
      });
    });
  }
}
const http = new HttpServer()
export default http