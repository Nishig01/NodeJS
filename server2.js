import {createServer} from 'http';

const users =[
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Smith'},
    {id: 3, name: 'Alice Johnson'},
    {id: 4, name: 'Bob Brown'},
    {id: 5, name: 'Charlie Davis'}
]

const server = createServer((req, res)=>{
    if(req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    }
    else if( req.url.match(/\/api\/users\/[0-9]+/) && req.method === 'GET'){
        const id = req.url.split('/')[3];
        const user = users.find(user => user.id === parseInt(id));
        res.setHeader('Content-Type', 'application/json');
        if(user){
            res.write(JSON.stringify(user));
        }
        else{
            res.statusCode = 404;
            res.write(JSON.stringify({message: 'User Not Found'}));
        }
        res.end();
    }
    else{
        res.setHeader('Content-Type', 'application/json');
        res.statusCode
        res.writeHead(JSON.stringify({message: 'Route Not Found'}));
        res.end();
    }
});
server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})