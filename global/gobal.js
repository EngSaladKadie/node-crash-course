// console.log(global);

setTimeout(()=>{
    console.log("this setTimeout is called");

    clearInterval(int);
    
},3000);

int = setInterval(()=>{
    console.log("this  a setInterval is called");  
    
},1000);

console.log(__dirname);
console.log(__filename);

