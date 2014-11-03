
var fs = require('fs')
var path = require('path')
 module.exports = function (dir, name, callback) { 

  fs.readdir(dir, function (err, list) {
  if (err)
       return callback(err) 
   
   list = list.filter(function (file) {
       return path.extname(file) === '.' + name
})

     callback(null, list)
   })
 }
 
 /*solution.js:

    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)

      list.forEach(function (file) {
        console.log(file)
      })
    })

───────────────────────────────────────────────────────────────────────────────

solution_filter.js:

    var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {

      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }
*/
/*
? Submission results match expected
? Additional module file exports a single function
? Additional module file exports a function that takes 3 arguments
? Additional module file handles errors properly
? Additional module file handles callback argument
? Additional module file returned two arguments on the callback function
? Additional module file returned Array as second argument of the callback
? Additional module file returned correct number of elements as the second argum
ent of the callback
? Additional module file returned correct list of files as the second argument o
f the callback

*/