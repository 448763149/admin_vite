/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-12 15:06:08
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-21 17:37:47
 * @detail: 
 * @change: 
 */

var models = require('../models');
var Op = models.Sequelize.Op

// 创建菜单
const add = async (req,res, next) => {
  req.body.menu_id = getUuid()
  // menuType 菜单类型
  // state  菜单状态启用，不启用
  // menuPath 菜单路径
  // showIndex 显示顺序
  // toUrl
  // iconCssName 菜单图标
  // name 菜单名称
  // createOpeTime 创建时间
  // createOper  创建人
  // delFlag
  // opeTime    操作时间
  // oper       操作人
  if(!req.body.parent_id){
    req.body.parent_id = 0
  }
  if(!req.body.createOpeTime){
    req.body.createOpeTime = getTime()
  }
  var menu = await models.SysMenu.create(req.body)
  res.json(setResult({menu: menu}));
}

// 菜单管理
const menuTree = async (req,res, next) => {
  const result = await models.SysMenu.findAndCountAll();
  let list = []
  if(result.rows && result.rows.length > 0){
    result.rows.map(itme=>{
      if(itme.parent_id == '0'){
        list.push(itme)
      }
    })
  }
  list = getsort(list,'showIndex')
  res.json(setResult({list:list}));
}

// 获取菜单管理
const getPlateAllMenu = async (req,res, next) => {
  const result = await models.SysMenu.findAll();
  console.log(result)
  let list = []
  let data = result
  if(data && data.length > 0){
    data.forEach(itme=>{
      itme.dataValues['label'] = itme.name
      itme.dataValues['value'] = itme.menu_id
      if(itme.parent_id == '0'){
        list.push(itme)
      }
    })
  }
  list = getsort(list,'showIndex')
  res.json(setResult({list:list}));
}
/* 
* 数组排序
*/ 
function getsort(list,showIndex){
  list.sort((a,b)=>{
    if(a.showIndex < b.showIndex){
      return -1
    }else if (a.showIndex < b.showIndex) return 1
    else return 0
  })
  return list
}

module.exports = {
  add,
  menuTree,
  getPlateAllMenu
}

