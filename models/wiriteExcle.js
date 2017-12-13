const xlsx = require('node-xlsx');
const fs = require('fs')
const path = require('path')


module.exports = (fileName, tableName, jsonData, cb) => {
  
  let filePath = path.join(__dirname, `../public/${fileName}.xlsx`)

  fs.createWriteStream(filePath)
  let buffer = xlsx.build([{
    name: tableName,
    data: jsonData
  }]);
  fs.writeFile(filePath, buffer, (err) => {
    if (err) throw err
    cb && cb (filePath)
  })
}