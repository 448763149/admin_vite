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
  }, {});
  return SysSeEn;
};
