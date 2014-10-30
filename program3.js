
var fs = require('fs')
var lines = undefined

function A(callback) {
fs.readFile(process.argv[2], function finishedReading(error, contents) {
  lines = parseInt(contents)
  lines = contents.toString().split('\n').length - 1
  callback()
  // do something with the movieData
})
}

function logMyNumber() {
  console.log(lines)
}
A(logMyNumber)
// або fs.readFileSync(process.argv[2], 'utf8')



