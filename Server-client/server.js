const http= require('http');

const server= http.createServer((req, res)=>{
    console.log("requiest made");
    
})
 
server.listen(5000, 'localhost',()=>{
    console.log("the server runing port 5000");
    
})