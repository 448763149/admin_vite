/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-07-15 17:34:20
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-15 17:37:50
 * @detail: 
 * @change: 
 */
'use strict';
//角色
module.exports = (sequelize, DataTypes) => {
  const SysRole = sequelize.define('SysRole', {
    description: DataTypes.STRING,
    roleType: DataTypes.STRING,
    name: DataTypes.STRING,
    createOpeTime: DataTypes.STRING,
    createOper: DataTypes.STRING,
    delFlag: DataTypes.STRING,
    opeTime: DataTypes.STRING,
    oper: DataTypes.STRING,
    uuid: DataTypes.STRING
  }, {});
  return SysRole;
};
