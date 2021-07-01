/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-25 11:02:19
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-28 16:01:28
 * @detail: 
 * @change: 
 */
var express = require('express');
var router = express.Router();
const Admin = require('../api/admin')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', Admin.loginIn)

module.exports = router;
