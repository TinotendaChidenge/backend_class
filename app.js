//HTTP MODULES
//SERVER AND CLIENT SIDE COMMUNICATION

//IMPORT HTTP MODULE
const http = require('htpp'); //inbuilt module

const port = 3000;
const hostname = '127.0.0.1';

//Create Server on http
http.createServer(function(req,res){
 res.statusCode = 200;
 res.setHeader('Content-Type','text/html');
 //Combination of the status code and setheader
 //res.writeHead(200, {'Content-Type': 'text/html'});
 res.write('WELCOME TO OUR FIRST BACKEND SERVER');
 res.end();
}).listen(port);