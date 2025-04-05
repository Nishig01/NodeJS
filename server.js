import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT =process.env.PORT || 5000;

//Get current path

const __firname = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__firname);
console.log(`__dirname: ${__dirname}`);
console.log(__firname);

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode=404;
    // res.write('Hello I am Nishi');
    // res.end();

    // res.writeHead(500, {'Content-Type': 'Application/json'});
    // res.end(JSON.stringify({message: 'Server Error'}))

    // res.end('Nishi fron body');

    try {
        //Check if GET request
        if (req.method === 'GET') {
            // Handle GET request
            if(req.url === '/'){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>HomePage</h1>');
            }
            else if(req.url ==='/about') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>AboutPage</h1>');
            }
            else{
                res.writeHead(404, {'Content-Type': 'text/html'})
                res.end('<h1>Not Found</h1>')
            }
        } else if (req.method === 'POST') {
            // Handle POST request
            console.log('POST request received');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>Hello from POST request</h1>');
        } else {
            // Handle other HTTP methods
            res.writeHead(405, {'Content-Type': 'text/html'});
            res.end('<h1>Method Not Allowed</h1>');
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('<h1>Internal Server Error</h1>');  
    }
    
    

   
})

server.listen(PORT, ()=>{
    console.log(`Server runnung on port ${PORT}`)
})