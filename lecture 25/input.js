const http=require("http");
const fs=require("fs");
http.createServer((req,res)=>{
    fs.readFile('./index.html','utf-8',(err,data)=>{
        if(err){
            res.writeHead(500,{"content-type":'text/plain'});
            res.end("internal server error");
            return;
        }
        else{
            res.writeHead(200,{"content-type":'text/html'});
            if(req.url=='/') res.write(data);
            else if(req.url=='/submit'){
            res.write('<h1>submitted</h1>');
            }
            res.end();
        }
    })
}).listen(1000);