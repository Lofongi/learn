 var http = require('http')
 var bl = require('bl')

 http.get(process.argv[2], function (response) {
   response.pipe(bl(function (err, data1) {
   if(err)
   return error.console(err)
   var a = data1.toString()
   console.log(a)
   
  http.get(process.argv[3], function (response) {
   response.pipe(bl(function (err, data2) {
   if(err)
   return error.console(err)
   var b = data2.toString()
   console.log(b)
   
   http.get(process.argv[4], function (response) {
   response.pipe(bl(function (err, data3) {
   if(err)
   return error.console(err)
   var c = data3.toString()
   console.log(c)
   } 
 ))})   
   } 
 ))})   
   } 
 ))})
 

 

 