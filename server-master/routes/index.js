/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-25 11:02:19
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-06-23 14:07:37
 * @detail: 
 * @change: 
 */
module.exports = function (app) {
  // app.get('/', function (req, res) {
  //   res.redirect('/indexkkk')
  // })
  app.use('/api', require('./indexkkk'))
  app.use('/api/base', require('./base'))
  app.use('/api/qw', require('./case'))
  app.use('/api/users', require('./users'))
//socket
  // app.use('/socket', require('./socketRouter'));
 // catch 404 and forward to error handler
  // app.use(function(req, res, next) {
  //   next(createError(404));
  // });
  // 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.status(404).render('404')
    }
  })
}
