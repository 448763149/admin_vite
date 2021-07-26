/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-15 15:24:08
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-23 15:02:30
 * @detail: 
 * @change: 
 */


/**
 * @param  {Array} router 路由数组
 * @param  {string} curpath 需要匹配的路由路径
 * @return {Array } 返回当前匹配到的所有父级路由数组
 * @Autor HuQiang 2021-5-11 15:17
 */
export function getParentRouter(router: any[], curpath: string): any {
  let res: any[] = []
  const forfn = function (list: any[], path: string) {
    let result = {}
    for (let i = 0; i < list.length; i++) {
      result = list[i]
      if (path === list[i].path) {
        // res.push(result)
        return result;
      } else {
        if (list[i].children && list[i].children.length > 0) {
          if (forfn(list[i].children, path)) {
            res.push(result)
            return res
          }
        }
      }
    }
  }
  forfn(router, curpath)
  return res
}


/**
 * @param  {Array} router 路由数组
 * @param  {string} path 需要匹配的路由路径
 * @return {Object || undefined} 返回当前匹配到的父级路由的对象
 * @Autor HuQiang 2021-5-11 15:17
 */
export function getParent(router:any[], path:string) {
  const _formatRouter = function (route:any, path:string):any {
    if (!route.children || route.children.length === 0) return
    for (let i = 0; i < route.children.length; i++) {
      const item = route.children[i]
      if (item.path === path) {
        return route
      } else {
        const result = _formatRouter(item, path)
        if (result) return result
      }
    }
  }
  
  if (!router || router.length === 0) return
  for (let i = 0; i < router.length; i++) {
    const result = _formatRouter(router[i], path)
    if (result) return result
  }
}



/**
 * @param  {Array} router 路由数组
 * @param  {string} path 需要匹配的路由路径
 * @return {Boolean} 返回当前路由是否存在在导航中如果不存在，证明他是最后一级路由
 * @Autor HuQiang 2021-5-11 15:17
 */
 export function getisRoute(router:any[], path:string) {
  const _formatRouter = function (route:any, path:string):any {
    if(route.path === path){
      return true
    }else{
      if (!router || !route.children || route.children.length === 0) return
      for (let i = 0; i < route.children.length; i++) {
        const item = route.children[i]
        if (item.path === path) {
          return true
        } else {
          const result = _formatRouter(item, path)
          if (result) return true
        }
      }
    }
  }
  if (!router || router.length === 0) return
  for (let i = 0; i < router.length; i++) {
    const result = _formatRouter(router[i], path)
    if (result) return true
  }
}



/**
 * 判断对象是否为空
 * @param  {object} obj 需要判断的对象
 * @return {Boolean} 返回当前
 * @Autor HuQiang 2021-5-11 15:17
 */
 export function isEmptyObject(obj:object){  
  for(var key in obj){  
    break;  return false  
  };  
  return true  
}; 




/**
 * 根据规则生成树结构
 * @param  {Array} arr 需要遍历的数组
 * @return {Boolean} 返回当前
 * @Autor HuQiang 2021-5-11 15:17
 */
export function turnToTreeOfManyRootPlus(arr:any[]) {
  var arrs:any = []
  arr.forEach(item => {
    if (item.parent_id == '0') {
      arrs.push(item)
    }
  })

  return arr.reduce((h, m) => {
    console.log(arr)
    if (m.parent_id != '0') {
      foo(h, m)
    }
    function foo(arr:any[], cur:any) {
      arr.forEach(item => {
        if (item.menu_id === cur.parent_id) {
          if (!item.children) {
            item.children = []
          }
          item.children.push(cur)
        } else if (item.children) {
          foo(item.children, cur)
        }
      })
    }
    return h
  }, arrs)
}