const qiniu = require('qiniu')
const qnKey = require('./qnKey')
const accessKey = qnKey.accessKey
const secretKey = qnKey.secretKey

var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
var config = new qiniu.conf.Config();
var bucketManager = new qiniu.rs.BucketManager(mac, config);

var publicBucketDomain = 'oz17n4xja.bkt.clouddn.com';
// 公开空间访问链接

module.exports = (key, cb) => {
  let downUrl = bucketManager.publicDownloadUrl(publicBucketDomain, key)
  cb(downUrl)
}