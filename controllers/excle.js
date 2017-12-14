const writeExcle = require('../models/wiriteExcle')
const UpFile = require('../models/qnUpload')




function simpleStringify (object){
  var simpleObject = {};
  for (var prop in object ){
      if (!object.hasOwnProperty(prop)){
          continue;
      }
      if (typeof(object[prop]) == 'object'){
          continue;
      }
      if (typeof(object[prop]) == 'function'){
          continue;
      }
      simpleObject[prop] = object[prop];
  }
  return JSON.stringify(simpleObject); // returns cleaned up JSON
};



function censor(censor) {
  var i = 0;

  return function(key, value) {
    if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value) 
      return '[Circular]'; 

    if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
      return '[Unknown]';

    ++i; // so we know we aren't using the original object anymore

    return value;  
  }
}



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
      res.end(simpleStringify(req))
      // res.end(JSON.stringify(uploadInfo))
    })
  })
}