/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-07-15 17:34:23
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-16 09:56:13
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
    uuid: DataTypes.STRING
  }, {});
  return SysOper;
};
