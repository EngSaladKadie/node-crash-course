
const { execFileSync } = require('child_process');
const { error } = require('console');
const fs = require('fs');

fs.readFile('./Docs/blog2.csv',(erro, data)=>{
    if (erro) {
        console.log(erro);
    }
      console.log(data.toString());
        
        
    
})

fs.writeFile('./Docs/blog2.csv',"waxaa la tir tiray data hore",(error)=>{
    if (error) {
        console.log(error);
        
        
    }
  console.log('wos written the file');
  
    
})
fs.writeFile('./Docs/blog3.txt',"hello world",()=>{
    console.log('wos written the file');
    
})


if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(error)=>{
        if (error) {
            console.log(error);
            
            
        }
        console.log('this folder was created');
        
    })
  
}  else{
    fs.rmdir('./assets',(error)=>{
        console.log(error);
        
    })
    console.log('this folder was deleted');
    
}
    
if(fs.existsSync('./dear.txt')){
    fs.unlink('./dear.txt',(err)=>{
        console.log(err);
        
    })
    console.log('this file was deleted');
}












// fs.readFile('./Docs/blog1.txt',(error ,data)=>{
//     if(error){
//         console.log(error);
        
//     }
//     console.log("salad " +data.toString());
    
    
        
// })

fs.writeFile('./Docs/blog4.csv',"iga raali noqo wax qaladan ayan kusuu diray ",()=>{
    console.log('sorry pro something wrong');
    
})

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(error)=>{
//         if(error){
//             console.log(error);
            
//         }
//         console.log('this folder was created');
        
//     })
// }
// else{
//     fs.rmdir('./assets',(error)=>{
//         if(error){
//             console.log(error);
//         }
//         console.log('this folder was deleted');
//     })
// }


if(!fs.existsSync('./files.js')){
    fs.mkdir('/assets' ,(err)=>{
        console.log('file wos created');
        

    })
}
else{
    fs.rmdir('/assets',(err)=>{
        console.log('folder delete');
        
    })
}