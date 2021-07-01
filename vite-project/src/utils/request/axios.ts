/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-15 15:46:34
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-15 15:47:23
 * @detail: 
 * @change: 
 */
import { App } from "vue";
import http from "./index";
import { AxiosInstance } from "axios";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $axios?: AxiosInstance;
  }
}

export const axiosPlugin = {
  install(app: App): void {
    app.config.globalProperties.$axios = http;
  },
};

export default axiosPlugin