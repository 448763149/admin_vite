/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-07-15 17:34:24
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-15 17:38:01
 * @detail: 
 * @change: 
 */
'use strict';
//部门与角色的关联
module.exports = (sequelize, DataTypes) => {
  const SysDeptRoleRel = sequelize.define('SysDeptRoleRel', {
    roleUuid: DataTypes.STRING,
    deptUuidd: DataTypes.STRING,
    createOpeTime: DataTypes.STRING,
    createOper: DataTypes.STRING,
    delFlag: DataTypes.STRING,
    opeTime: DataTypes.STRING,
    oper: DataTypes.STRING,
    uuid: DataTypes.STRING
  }, {});
  return SysDeptRoleRel;
};
