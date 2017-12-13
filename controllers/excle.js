const writeExcle = require('../models/wiriteExcle')
const UpFile = require

const jsonData = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 4],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

module.exports = () => {
  writeExcle('test', 'mySheetName', jsonData, (filePath) => {
    
  })
}