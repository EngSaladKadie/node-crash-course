const http= require('http');
const PORT =5000;
const HOSTNAME ="localhost";
const server= http.createServer((req, res)=>{
    console.log("requiest made");
    
})
 
server.listen(PORT, HOSTNAME,()=>{
    console.log(`the server runing this: ${PORT}`);
    
})