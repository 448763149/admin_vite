/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-25 11:02:19
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-28 16:24:36
 * @detail: 
 * @change: 
 */
var express = require('express');
var router = express.Router();
var models = require('../models');
var Op = models.Sequelize.Op
/* GET home page. */
var UUID = require('uuid')
router.get('/case', async function(req, res, next) {
  var nowPage = parseInt(req.query.nowPage) || 1;
  var pageShow = parseInt(req.query.pageShow) || 10;
  var where = {};
  // 模糊查询标题
  var title = req.query.title;
  if (title) {
      where.title = {
        [Op.like]: '%' + title + '%'
      }
  }
  var result = await models.Case.findAndCountAll({
    order: [['id', 'DESC']],// 倒序查询最新的文章
    where: where,
    offset: (nowPage - 1) * pageShow,
    limit: pageShow
  });
  res.json(setResult({
    list: result.rows,
    page: {
      nowPage: nowPage,
      pageShow: pageShow,
      // 一共有多少条记录
      total: result.count
    }})
  );
});


// 新增
router.post('/caseAdd', async function (req, res, next) {
  // res.json({'你发送的内容是': req.body});
  req.body.uuid = UUID.v1()
  var article = await models.Case.create(req.body)
  res.json(setResult({article: article}));
});


// 查询单条文章
// router.get('/:id', async function (req, res, next) {
//   var article = await models.Case.findOne({
//       where: {id: req.params.id},
//       // 多表查询 
//       // include: [{model:models.Comment},{model:models.Bb,as: 'Articlelist',attributes:['id']}],
//   });
//   // 处理统一返回格式
//   res.json(setResult(article));
// });

// 修改
// router.put('/:id', async function (req, res, next) {
//   var article = await models.Case.findByPk(req.params.id);
//   article.update(req.body);
//   res.json({article: article});
// });

// 删除
router.get('/delete', async function (req, res, next) {
  console.log('删除接口删除接口删除接口删除接口删除接口删除接口删除接口删除接口')
  console.log(req.query.id)
  var article = await models.Case.findByPk(req.query.id);
  article.destroy();
  res.json(setResult({article}));
});

module.exports = router;
