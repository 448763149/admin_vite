/*
 * @Description: 
 * @Version: 1.0
 * @Autor: HuQiang
 * @Date: 2021-05-25 11:02:19
 * @LastEditors: HuQiang
 * @LastEditTime: 2021-07-20 17:26:00
 * @detail: 
 * @change: 
 */
module.exports = function (app) {
  // app.get('/', function (req, res) {
  //   res.redirect('/indexkkk')
  // })
  // app.use('/api', checkAuth,require('./indexkkk'))
  app.use('/api/base', checkAuth,require('./base'))
  app.use('/api/qw', checkAuth,require('./case'))
  app.use('/api/users',require('./users'))
  app.use('/api/sys',require('./menu'))
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
