const writeExcle = require('../models/wiriteExcle')
const UpFile = require('../models/qnUpload')



module.exports = (req, res) => {

  let fileName = "test"
  let sheetName = "mySheet"
  const jsonData = [
    [1, 2, 3, 4],
    [1, 2, 3],
    [1, 2, 4],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ];

  writeExcle(fileName, sheetName, jsonData, (filePath) => {
    UpFile(filePath, (err, uploadInfo) => {
      if (err) {
        throw err
      }
      res.end(JSON.stringify(uploadInfo))
    })
  })
}