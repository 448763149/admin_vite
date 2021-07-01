/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-12 15:06:08
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-28 16:28:00
 * @detail: 
 * @change: 
 */

var models = require('../models');
var Op = models.Sequelize.Op

const loginIn = async (ctx,res, next) => {
  const user = ctx.body
  console.log('调试')
  const data = await models.User.findOne({
    where: {
      userName: {
        [Op.eq]: `${user.name}`
      },
      password: user.password
    }
  })
  res.json(setResult({
    data,
    message: data ? '登陆成功' : '账号或密码错误'
  }))
}
module.exports = {
  loginIn
}