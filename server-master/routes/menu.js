/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-25 11:02:19
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-21 14:58:16
 * @detail: 
 * @change: 
 */
var express = require('express');
var router = express.Router();
const Menu = require('../api/menu')
router.post('/menuTree', Menu.menuTree)
router.post('/menuAdd', Menu.add)
// 获取父级的菜单
router.post('/getPlateAllMenu', Menu.getPlateAllMenu)
module.exports = router;