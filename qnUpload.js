const qiniu = require('qiniu')
const key = require('./qnKey')

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



var localFile = "./test.xlsx";
var formUploader = new qiniu.form_up.FormUploader(config);
var putExtra = new qiniu.form_up.PutExtra();
// 文件名
var key = 'tes2222t.xlsx';
// 文件上传
formUploader.putFile(uploadToken, key, localFile, putExtra, (respErr, respBody, respInfo) => {
  if (respErr) {
    throw respErr;
  }
  if (respInfo.statusCode == 200) {
    console.log(respBody);
  } else {
    console.log(respInfo.statusCode);
    console.log(respBody);
  }
})