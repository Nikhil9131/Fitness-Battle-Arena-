const express=require("express");
const app=express();
app.get('/',(req,res)=>{
    res.send("<h1>home</h1>");
})
app.get('/about',(req,res)=>{
    res.send("about page");
})
app.get('/login',(req,res)=>{
    res.send("login page");
})
app.get('/users/:id',(req,res)=>{
    console.log(req.params);
    res.send(req.params.id);
})
app.get('/products',(req,res)=>{
    res.send(req.query.name);
})
app.listen(4000);
