const fs=require("fs").promises;
async function read(){
    try{
        const data=await fs.readFile('demo.txt','utf-8');
        console.log(data);
    }catch(err){
        console.log(err);
    }
}
read();

fs.readFile('./demo.txt','utf-8')
.then(data=>console.log(data))
.catch(err=>console.log(err));

// const fs=require("fs");
// fs.readFile('./demo.txt','utf-8',(err,data)=>{
//     if(err) console.log(err);
//     console.log(data);

// })
// console.log("done");