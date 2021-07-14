/*
 * @Description:
 * @version:
 * @Author: HuQiang
 * @Date: 2021-06-12 10:53:32
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-14 09:37:20
 */
import request from "@/utils/request/request";

// 获取接口公共请求方法
export function getRequest(api: { url: string, method: string}, par: any) {
  // const params = api.method === 'get' ? {...api,params: par} : {...api,data: par }
  // console.log(params)
  if (api.method === 'get') {
    return request({
      url:api.url,
      method: "get",
      params:par
    })
  }else{
    return request({
      url:api.url,
      method: "post",
      data:par
    })
  }
  // return request(params)
}

// 登录
export const login = (data: any) => {
  return request({
    url:'/api/users/login',
    method: "post",
    data
  })
}


