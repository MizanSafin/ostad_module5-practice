const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        //Asynchronous file write:
        /*
       fs.writeFile("sadman.txt","Name: Sadman Safin , Age:1.5 year",(err)=>{
           if(err){
               res.writeHead(401,{"content-type":"text/html"});
               res.write(`File write fail .`);
               res.end();
           }else{
               res.writeHead(200,{"content-type":"text/html"});
               res.write(`File write success .`);
               res.end();
           }
       }) */
        //synchronous File write:
       let err =  fs.writeFileSync("safin.txt",`My name is Sadman Safin & I am 1.5 year old .`);
        if(err){
            res.writeHead(401,{"content-type":"text/html"});
            res.write(`File write fail .`);
            res.end();
        }else{
            res.writeHead(200,{"content-type":"text/html"});
            res.write(`File write success .`);
            res.end();
        }
    }
})

server.listen(3007,()=>{
    console.log(`Server is running at the port 3007 .....`)
})


