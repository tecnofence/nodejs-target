
import { createServer } from 'http';
import currentDate from './currentDate.js'

createServer((req, res) => {

    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})

const horaAtual = currentDate()

    res.end(`Isso é um servidor HTTP Aula01 ${horaAtual}`)

}).listen(3030, () =>{
    console.log('Running server!');
})