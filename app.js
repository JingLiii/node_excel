const path = require('path')
path.dirname(__dirname)

const express = require('express')
const http = require('http')
const router = require('./routes/index')

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())


app.use(router)

http.createServer(app).listen(3000, () => {
  console.log(`listen in server on port 3000`)
})