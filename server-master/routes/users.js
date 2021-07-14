/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-25 11:02:19
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-14 10:17:49
 * @detail: 
 * @change: 
 */
var express = require('express');
var router = express.Router();
const Admin = require('../api/admin')
router.post('/login', Admin.loginIn)
module.exports = router;
