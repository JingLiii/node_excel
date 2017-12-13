const express = require('express')
const http = require('http')
const path = require('path')
const router = require('./routes/index')

// const app = express()

function exprFunc() {
  let funcs = []

  let expr = function (req, res) {
    let i = 0

    function cb() {
      let task = funcs[i++]
      if (!task) return
      task(req, res, cb)
    }
    cb()
  }
  expr.use = function (f) {
    funcs.push(f)
  }
  return expr
}

var app = exprFunc()

app.use((req, res, cb) => {
  console.log('haha')
  cb()
})

app.use((req, res, cb) => {
  console.log("hehe")
  cb()
})

app.use((req, res) => {
  res.end('there is nothing happend')
})
// app.use(express.static(path.join(__dirname, 'public')))


// app.get('/', (req, res, cb) => {
//   res.send('sssw')
// })

http.createServer(app).listen(3000, () => {
  console.log(`listen in server on port 3000`)
})