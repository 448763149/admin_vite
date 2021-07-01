
/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-25 11:02:19
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-05-27 17:35:16
 * @detail: 
 * @change: 
 */

/* 接口统一返回格式 */
global.setResult = function(data=null,code=200,message='success'){
  return{
    code:code,
    message:message,
    data:data
  }
}