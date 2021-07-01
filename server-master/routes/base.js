/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-06-23 13:56:13
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-23 14:29:54
 * @detail: 
 * @change: 
 */
var express = require('express');
var router = express.Router();
const multer = require('multer');
const fs = require('fs')
const path = require('path')
let upload = multer({ dest: 'uploads/' })
//uuid工具可以生成唯一标示 需要安装
var UUID = require('uuid')
router.post('/upload', upload.single('fileData'), function (req, res, next) {
  //读取文件路径(uploads/文件夹下面的新建的图片地址)
  // console.log(UUID.v1())
  fs.readFile(req.file.path, (err, data) => {
    //如果读取失败
    if (err) { return res.send('上传失败') }
    //如果读取成功
    //声明图片名字为时间戳和随机数拼接成的，尽量确保唯一性
    // let time = UUID.v1()
    let time = Date.now() + parseInt(Math.random() * 999) + parseInt(Math.random() * 2222);
    //拓展名
    let extname = req.file.mimetype.split('/')[1]
    //拼接成图片名
    let keepname = time + '.' + extname
    //三个参数
    //1.图片的绝对路径
    //2.写入的内容
    //3.回调函数
    fs.writeFile(path.join(__dirname, '../public/img/' + keepname), data, (err) => {
      if (err) { return res.json(setResult(null, -200, '写入失败')) }
      res.json(setResult({ imgUrl: '/public/img/' + keepname }))
    });
  });
});


module.exports = router;