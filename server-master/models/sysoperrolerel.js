/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-07-15 17:34:19
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-16 11:42:00
 * @detail: 
 * @change: 
 */
'use strict';
// 会员角色表
module.exports = (sequelize, DataTypes) => {
  const SysOperRoleRel = sequelize.define('SysOperRoleRel', {
    roleUuid: DataTypes.STRING,
    operUuid: DataTypes.STRING,
    createOpeTime: DataTypes.STRING,
    createOper: DataTypes.STRING,
    delFlag: DataTypes.STRING,
    opeTime: DataTypes.STRING,
    oper: DataTypes.STRING,
    uuid: DataTypes.STRING
  }, {});
  return SysOperRoleRel;
};
