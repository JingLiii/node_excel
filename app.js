const path = require('path')
path.dirname(__dirname)

const express = require('express')
const http = require('http')
const router = require('./routes/index')

const app = express()

app.use(router)

http.createServer(app).listen(3000, () => {
  console.log(`listen in server on port 3000`)
})