const express = require('express')
const wirteExcle = require('./wiriteExcle')
const app = express()
app.post('/', (req, res) => {
  res.send('Hello World')
})

const server = app.listen(3000, () => {
  const host = server.address().address
  const port = server.address().port
  // console.log('Example app listening at http://:', host, port)
  console.log('Example app listening at http://%s:%s', host, port);
})



