var userSql = require('../sql/userSql')
var User = {
  userId: '',
  userName: '',
  password: ''
}
User.getUserByUserNameAndPass = (db, reqParam, fn) => {
  db.query(userSql.loginSql, [reqParam.userName, reqParam.password], fn)
}

module.exports = User
