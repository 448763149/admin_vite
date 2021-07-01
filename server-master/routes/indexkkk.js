/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-25 11:02:19
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-15 16:17:50
 * @detail: 
 * @change: 
 */
var express = require('express');
var router = express.Router();
var models = require('../models');
var Op = models.Sequelize.Op
/* GET home page. */
router.get('/', async function(req, res, next) {
  var currentPage = parseInt(req.query.currentPage) || 1;
  var pageSize = parseInt(req.query.pageSize) || 2;
  var where = {};
  // models.Article.findAll().then(data =>{
  //   // res.json({data})
  // })
  // 模糊查询标题
  var title = req.query.title;
  if (title) {
      where.title = {
        [Op.like]: '%' + title + '%'
      }
  }
  var result = await models.Article.findAndCountAll({
    order: [['id', 'DESC']],// 倒序查询最新的文章
    where: where,
    offset: (currentPage - 1) * pageSize,
    limit: pageSize
  });
  res.json(setResult({
    articles: result.rows,
    page: {
      currentPage: currentPage,
      pageSize: pageSize,
      // 一共有多少条记录
      total: result.count
    }})
  );
});


// 新增
router.post('/add', async function (req, res, next) {
  // res.json({'你发送的内容是': req.body});
  var article = await models.Article.create(req.body)
  res.json({article: article});
});


// 查询单条文章
router.get('/:id', async function (req, res, next) {
  var article = await models.Article.findOne({
      where: {id: req.params.id},
      // 多表查询 
      include: [{model:models.Comment},{model:models.Bb,as: 'Articlelist',attributes:['id']}],
  });
  // 处理统一返回格式
  res.json(setResult(article));
});

// 修改
router.put('/:id', async function (req, res, next) {
  var article = await models.Article.findByPk(req.params.id);
  article.update(req.body);
  res.json({article: article});
});

// 删除
router.delete('/:id', async function (req, res, next) {
  var article = await models.Article.findByPk(req.params.id);
  article.destroy();
  res.json({msg: '删除成功'});
});
module.exports = router;
