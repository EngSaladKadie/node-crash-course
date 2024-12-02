const express = require("express");
const app= express();
app.set('view engine','ejs')
app.listen(8000, ()=>{
    console.log('server runing port 8000');
    
});

app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/about', (req,res)=>{
    res.render('about');
})
app.get('/Contact',(req,res)=>{
    res.render('Contact');
})
app.use((req,res)=>{
    res.status(404,'not found').render('404');
})












// app.get('/',(req,res)=>{
//     res.sendFile('./view/home.html', {root: __dirname})
// })
// app.get('/about' , (req,res)=>{
//     res.sendFile('/view/about.html', {root: __dirname})
// })
// app.get('/Contact',(req,res)=>{
//     res.sendFile('/view/Contact.html',{root: __dirname})
// })
// app.use((req,res)=>{
//     res.status(404,'not found page').sendFile('/view/404.html',{root: __dirname})
// })
