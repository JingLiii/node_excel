const express = require('express')
const router = express.Router()


// 处理获取所有控制器文件
const path = require('path')
const fs = require('fs')
const controllersArr = []
const controllersPath = path.join(__dirname, '../controllers')
fs.readdir(controllersPath, (err, files) => {
  if (err) throw err
  files.forEach((item) => {
    controllersArr[path.basename(item, '.js')] = require(path.join(controllersPath, item))
  })
})

// 测试服务
router.route('/excle').all((req, res, next) => {
  controllersArr['excle']()
})

module.exports = router