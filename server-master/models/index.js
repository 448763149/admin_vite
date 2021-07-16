/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-25 11:19:01
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-15 17:53:17
 * @detail: 
 * @change: 
 */
'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize.authenticate().then(() => {
  console.log('<<<<<<<<<<<<=======MYSQL 连接成功......=======>>>>>>>>>>>>>>>>>');
}).catch(err => {
  console.error('<<<<<<<<<<<<=======链接失败:', err);
});


fs.readdirSync(__dirname).filter(file => {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(file => {
  const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
  // console.log(db[modelName])
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// 根据模型自动创建表
//  sequelize.sync()
db.sequelize.sync().then(() => {
  console.log('<<<<<<<<<<<<=======根据模型自动创建表成功=======>>>>>>>>>>>>>>>>>');
}, (err) => {
  console.log('<<<<<<<<<<<<=======根据模型自动创建表失败=======>>>>>>>>>>>>>>>>>');
  console.log(err);
});
module.exports = db;



