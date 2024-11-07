const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    console.log(req.url ,req.method);

    res.writeHead(404, 'page not found', {'content-type':'text/html'});
    fs.readFile('../view/home.html', (err, data)=>{
        if (err) {
            console.log(err);
            res.end();
            
        }
        res.end(data);
    })


    
    
});

server.listen(3000, 'localhost' ,()=>{
    console.log('server runing port 3000');
    
})