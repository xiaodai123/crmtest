const express = require('express')
const bodyParser = require('body-parser')
const index = require('./index')
const mysql = require('mysql')
const dbConfig = require('../db/dbConfig')

let connection = mysql.createConnection(dbConfig)

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }

  console.log('connected as id ' + connection.threadId)
})

const app = express()
app.use(bodyParser.json())

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

index(app, connection)

app.listen(3001, function () {
  console.log('listening on port 3001')
})

