const http= require('http');
const fs = require('fs');
const lod = require('lodash');

const server = http.createServer((req, res)=>{
    // const num = lod.random(0,10);
    // console.log(num);
    
    
    res.writeHead(404, 'not found', {'content-type': 'text/html'});

    let path = '../view/';
    switch(req.url){
        case '/':
            path += 'home.html';
            res.statusCode = 200;
        break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
        break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('location','/about');
            res.end();
        break; 
        case '/Contact':
            path += 'Contact.html';
            res.statusCode = 200;
        break;  
           
        default:
            path +='404.html';
          
    }

    

    fs.readFile(path, (err, data)=>{
        if (err) {
            console.log(err);
            res.end();
            
            
        }
        res.end(data);
    })
    

})
server.listen(3000, 'localhost', ()=>{
    console.log('the server runing this port 3000');
    
})
























