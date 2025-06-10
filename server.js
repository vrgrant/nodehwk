const http = require('http');
const fs = require('fs')

const PORT = 3000;

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');

   let path = './views/';
   switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
    case '/about-me':
        res.setHeader('Location', '/about');
        res.statusCode = 301;
        res.end();
    default:
        path += '404.html';
        res.statusCode = 404;
        break;    
   }
   fs.readFile(path, (err, data) =>{
    if(err){
        console.log(err);
        res.end();
    } else {
        res.write(data);
        res.end();
    }
   })

});

server.listen(PORT, 'localhost', () =>{
    console.log(`listening for requests on port ${PORT}`)
})

// commmon ports = [5000, 5500, 3000, 8080]

