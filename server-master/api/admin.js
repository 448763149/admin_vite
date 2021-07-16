/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-12 15:06:08
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-16 09:56:37
 * @detail: 
 * @change: 
 */

var models = require('../models');
var Op = models.Sequelize.Op

// 登录接口
const loginIn = async (ctx,res, next) => {
  const sysoper = ctx.body
  const data = await models.SysOper.findOne({
    where: {
      loginName: {
        [Op.eq]: `${sysoper.name}`
      },
      pwd: sysoper.password
    }
  })
  if(data){
    let token = getToken({uid:data.id})
    res.json(setResult({token,...data.dataValues}))
  }else{
    res.json(setResult(data,'51','账号或密码错误'))
  }
  
}
module.exports = {
  loginIn
}

