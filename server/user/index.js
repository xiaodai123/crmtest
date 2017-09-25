const userAction = require('./action/userAction')

var routes = (app, db) => {
  app.post('/requestLogin', userAction.requestLogin(db))
}

module.exports = routes
