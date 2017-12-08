const xlsx = require('node-xlsx');
const fs = require('fs')
const path = require('path')
module.exports = (fileName, tableName, jsonData) => {

  fs.createWriteStream(`${fileName}.xlsx`)

  let buffer = xlsx.build([{
    name: tableName,
    data: jsonData
  }]);

  fs.writeFile(`${fileName}.xlsx`, buffer, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('写入成功')
    }
  })
}