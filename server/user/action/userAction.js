var user = require('../data/user')
var UserAction = {
  requestLogin: (db) => {
    return function (req, res, next) {
      let reqParam = req.body
      user.getUserByUserNameAndPass(db, reqParam, function (error, results, fields) {
        if (error) throw error
        console.log(results, fields)
        if (results) {
          res.json([200, {
            code: 200,
            msg: '请求成功',
            user: results[0]
          }])
        } else {
          res.json([200, {
            code: 500,
            msg: '账号或密码错误'
          }])
        }
      })
    }
  }
}

module.exports = UserAction
