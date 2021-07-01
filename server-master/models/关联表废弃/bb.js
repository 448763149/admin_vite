/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-25 14:05:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-05-27 16:16:18
 * @detail: 
 * @change: 
 */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bb = sequelize.define('Bb', {
    // articleId: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  Bb.associate = function(models) {
    models.Bb.belongsTo(models.Article);
  };
  return Bb;
};
