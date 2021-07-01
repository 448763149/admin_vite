/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-25 14:05:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-23 15:27:29
 * @detail: 
 * @change: 
 */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define('Case', {
    title: DataTypes.STRING,
    url:DataTypes.STRING,
    labelList:DataTypes.TEXT,
    content: DataTypes.TEXT,
    uuid:DataTypes.STRING
  }, {});
  // Article.associate = function(models) {
  //   models.Article.hasMany(models.Comment)
  //   models.Article.hasMany(models.Bb,{
  //     foreignKey:'ArticleId',sourceKey:'id', as: 'Articlelist'
  //   })
  // };
  return Case;
};

