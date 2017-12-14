const xlsx = require('node-xlsx');
const fs = require('fs')
const path = require('path')


module.exports = (fileName, sheetName, jsonData, cb) => {

  let filePath = path.join(__dirname, `../temp/${fileName}.xlsx`)
  fs.createWriteStream(filePath)
  let buffer = xlsx.build([{
    name: sheetName,
    data: jsonData
  }]);
  fs.writeFile(filePath, buffer, (err) => {
    if (err) throw err
    cb && cb(filePath)
  })
}