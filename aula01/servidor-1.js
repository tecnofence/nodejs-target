"use strict"
const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    res.end('Isso é um servidor HTTP Aula01')

}).listen(3030, () =>{
    console.log('Running server!');
})