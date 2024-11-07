const http= require('http');
// const PORT =3000;
// const HOSTNAME ="localhost";

const server= http.createServer((req, res)=>{
    console.log(req.url, req.method);
    res.setHeader('content-type', 'text/html');
    res.write('hell salad yusuf');
    res.end();
    
})
 
server.listen(3000, 'localhost',() =>{
    console.log(`the server runing this: 3000`);
    
})