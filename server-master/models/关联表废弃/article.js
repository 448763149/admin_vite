/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-25 14:05:40
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-28 11:10:37
 * @detail: 
 * @change: 
 */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Article.associate = function(models) {
    models.Article.hasMany(models.Comment)
    models.Article.hasMany(models.Bb,{
      foreignKey:'ArticleId',sourceKey:'id', as: 'Articlelist'
    })
  };
  return Article;
};
