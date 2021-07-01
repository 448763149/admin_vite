/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-15 15:48:38
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-15 17:07:22
 * @detail: 
 * @change: 
 */
import http from "@/utils/request/index";
// 
export const getList = (url:string,data: any) => {
  return http.request({
      url,
      method: "get",
      data
  })
}