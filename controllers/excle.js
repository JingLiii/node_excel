const writeExcle = require('../models/wiriteExcle')
const UpFile = require('../models/qnUpload')
const downLoad = require('../models/qnDownload')
//   filename; string,
//   sheetname: string,
//   jsondata: Array > array, array

module.exports = (req, res) => {
  let reqData = req.body
  if (!reqData.filename) {
    res.end('参数有误')
    return
  }
  if (!reqData.sheetname) {
    res.end('参数有误')
    return
  }
  
  if (!reqData.jsondata) {
    res.end('参数有误')
    return
  }
  

  writeExcle(reqData.filename, reqData.sheetname, JSON.parse(reqData.jsondata), (filePath) => {
    UpFile(filePath, (err, uploadInfo) => {
      if (err) {
        throw err
      }
      downLoad(uploadInfo.key, (fileUrl) => {
        res.json(fileUrl)
      })
    })
  })
}