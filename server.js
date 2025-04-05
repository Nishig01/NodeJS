import http from 'http';

const PORT =process.env.PORT || 5000;
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.statusCode=404;
    // res.write('Hello I am Nishi');
    // res.end();
    // res.end('Nishi fron body');
    // res.writeHead(200, {'Content-Type': 'text/html'});
    res.writeHead(500, {'Content-Type': 'Application/json'});
    // res.end('<h1>Nishi</h1>');
    res.end(JSON.stringify({message: 'Server Error'}))
})

server.listen(PORT, ()=>{
    console.log(`Server runnung on port ${PORT}`)
})