var userRoutes = require('./user/index')
var routes = (app, db) => {
  userRoutes(app, db)
}
module.exports = routes
