const http=require("http");
const fs=require("fs");
const user=[{name:"ansh"},{name:"jatin"}];

// simple creating a server
http.createServer((req,res)=>{
    res.write("<h1> Hello my name is this</h1>");
    res.write("<div>jefbjbfwdj ubedjhde</div>")
    res.end("hello");
    
}).listen(3000);

// simple making API call
http.createServer((req,res)=>{
    if(req.url==='/api'){
    res.writeHead(200,{"content-type":"application/json"});
    res.write(JSON.stringify(user));
    res.end();
}
}).listen(4000);

// request params
http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("<h1>Home page </h1>")
    }
    else if(req.url==='/about'){
        res.write("<h1> about page</h1>");
    }
    else if(req.url==='/login'){
        res.write("<h1> login page</h1>");
    }
    else{
        res.write("<h1>other page</h1>");
    }
    res.end();
}).listen(5000);
