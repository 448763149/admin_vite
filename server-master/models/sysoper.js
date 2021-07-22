/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-07-15 17:34:23
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-21 17:32:04
 * @detail: 
 * @change: 
 */
'use strict';
// 用户
module.exports = (sequelize, DataTypes) => {
  const SysOper = sequelize.define('SysOper', {
    state: DataTypes.STRING,
    mobile: DataTypes.STRING,
    leaderUuid: DataTypes.STRING,
    departmentUuid: DataTypes.STRING,
    pwd: DataTypes.STRING,
    name: DataTypes.STRING,
    loginName: DataTypes.STRING,
    createOpeTime: DataTypes.STRING,
    createOper: DataTypes.STRING,
    delFlag: DataTypes.STRING,
    opeTime: DataTypes.STRING,
    oper: DataTypes.STRING,
    uuid: DataTypes.STRING,
  }, {
     // 用来设置字段以外的其他信息
    timestamps:false
  });
  return SysOper;
};
