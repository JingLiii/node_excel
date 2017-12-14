const qiniu = require('qiniu')
const key = require('./qnKey')
const path = require('path')
var uuid = require('node-uuid')
// 客户端上传凭证
// 上传凭证
const accessKey = key.accessKey
const secretKey = key.secretKey

var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);


//自定义凭证有效期（示例2小时，expires单位为秒，为上传凭证的有效时间）
var options = {
  scope: 'work',
  expires: 7200
};

var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken = putPolicy.uploadToken(mac);

var config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z0;



var formUploader = new qiniu.form_up.FormUploader(config);
var putExtra = new qiniu.form_up.PutExtra();


module.exports = (filePath, cb) => {
  // 文件上传
  let extname = path.extname(filePath)
  let basename = path.basename(filePath, extname)
  let fileName = `${basename}_${uuid()}${extname}`

  formUploader.putFile(uploadToken, fileName, filePath, putExtra, (err, respBody, respInfo) => {
    if (err) {
      return cb(err)
    }
    if (respInfo.statusCode == 200) {
      cb(null, respBody)
    } else {
      console.log(respInfo.statusCode);
      console.log(respBody);
    }
  })
}