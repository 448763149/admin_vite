/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-07-15 17:34:17
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-21 14:51:45
 * @detail: 
 * @change: 
 */
'use strict';
// 菜单
module.exports = (sequelize, DataTypes) => {
  const SysMenu = sequelize.define('SysMenu', {
    menuType: DataTypes.STRING,
    state: DataTypes.STRING,
    menuPath: DataTypes.STRING,
    showIndex: DataTypes.STRING,
    toUrl: DataTypes.STRING,
    iconCssName: DataTypes.STRING,
    name: DataTypes.STRING,
    createOpeTime: DataTypes.STRING,
    createOper: DataTypes.STRING,
    delFlag: DataTypes.STRING,
    opeTime: DataTypes.STRING,
    oper: DataTypes.STRING,
    menu_id: DataTypes.STRING,
    parent_id:DataTypes.STRING
  }, {});
  return SysMenu;
};
