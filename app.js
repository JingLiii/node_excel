var xlsx = require('node-xlsx');
const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express()
app.post('/', (req, res) => {
  res.send('Hello World')
})



const jsonData = [
[1,2,3],
[1,2,3],
[1,2,4],
[1,2,3],
[1,2,3],
[1,2,3],
[1,2,3],
[1,2,3],
];

fs.createWriteStream('./testFile.xlsx')

var buffer = xlsx.build([{
  name: "mySheetName",
  data: jsonData
}]); // Returns a buffer

// var buffer = xlsx.build(jsonData); // Returns a buffer

fs.writeFile('./testFile.xlsx', buffer, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('写入成功')
    // fs.unlink('./testFile.xlsx', (err) => {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log('删除成功')
    //   }
    // })
  }
})






const server = app.listen(3000, () => {
  const host = server.address().address
  const port = server.address().port
  // console.log('Example app listening at http://:', host, port)
  console.log('Example app listening at http://%s:%s', host, port);
})