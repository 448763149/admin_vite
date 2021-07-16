/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-07-15 17:34:22
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-15 17:37:33
 * @detail: 
 * @change: 
 */
'use strict';
//部门
module.exports = (sequelize, DataTypes) => {
  const SysDept = sequelize.define('SysDept', {
    departmentName: DataTypes.STRING,
    createOpeTime: DataTypes.STRING,
    createOper: DataTypes.STRING,
    delFlag: DataTypes.STRING,
    opeTime: DataTypes.STRING,
    oper: DataTypes.STRING,
    uuid: DataTypes.STRING
  }, {});
  return SysDept;
};
