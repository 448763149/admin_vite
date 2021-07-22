/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-07-15 17:34:25
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-21 17:34:18
 * @detail: 
 * @change: 
 */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const SysSeEn = sequelize.define('SysSecurityEntity', {
    permitType: DataTypes.STRING,
    belongToMenuUuid: DataTypes.STRING,
    belongToButUuid: DataTypes.STRING,
    businessType: DataTypes.STRING,
    state: DataTypes.STRING,
    expression: DataTypes.STRING,
    name: DataTypes.STRING,
    createOpeTime: DataTypes.STRING,
    createOper: DataTypes.STRING,
    delFlag: DataTypes.STRING,
    opeTime: DataTypes.STRING,
    oper: DataTypes.STRING,
    uuid: DataTypes.STRING
  },{
    // 用来设置字段以外的其他信息
   timestamps:false
 });
  return SysSeEn;
};
