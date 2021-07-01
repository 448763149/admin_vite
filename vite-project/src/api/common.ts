/*
 * @Description:
 * @version:
 * @Author: YangBo
 * @Date: 2020-09-12 10:53:32
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-29 11:00:26
 */
import http from "@/utils/request/index";

// 获取接口公共请求方法
export function getRequest(api: { url: string, method: string }, par: any) {
  const params = api.method === 'get' ? { params: par, ...api } : { data: par, ...api }
  return http.request({
    ...params
  })
}

// 登录
export const login = (data: any) => {
  return http.request({
    url:'/api/users/login',
    method: "post",
    data
  })
}


