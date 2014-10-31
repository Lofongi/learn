
var fs = require('fs')
var path = require('path')
//process.argv[2] - directory name
//process.argv[3] - file extension без '.'
var g = '.' + process.argv[3]

//console.log(g)

 fs.readdir(process.argv[2], function (err, list) {
 for (var i = 0; i < list.length; i++) {
 var b = path.extname(list[i])
 if (g === b){
 console.log(list[i])
 }
 }
 })
 
/*

 var fs = require('fs')
 var path = require('path')

 fs.readdir(process.argv[2], function (err, list) {
   list.forEach(function (file) {
     if (path.extname(file) === '.' + process.argv[3])
       console.log(file)
   })
 })

*/




 
 
 //path.extname('.' + process.argv[3])
 /*
 Create a program that prints a list of files in a given directory, filtered by t
he extension of the files. You will be provided a directory name as the first ar
gument to your program (e.g. '/path/to/dir/') and a file extension to filter by
as the second argument.

For example, if you get 'txt' as the second argument then you will need to filte
r the list to only files that end with .txt. Note that the second argument will
not come prefixed with a '.'.

The list of files should be printed to the console, one file per line. You must
use asynchronous I/O.

 */