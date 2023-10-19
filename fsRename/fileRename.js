const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){

        /*
        //Asynchronous file rename:
         fs.rename("Sadman.txt","sadman.txt",(err)=>{
           if(err){
               res.writeHead(200,{"content-type":"text/html"});
               res.write(`File rename fail .`);
               res.end();
           }else{
               res.writeHead(200,{"content-type":"text/html"});
               res.write(`File rename success .`);
               res.end();
           }
       }) */

        //synchronous File Rename:
        let err =  fs.renameSync("sadman.txt",`safin.txt`);
        if(err){
            res.writeHead(200,{"content-type":"text/html"});
            res.write(`File rename fail .`);
            res.end();
        }else{
            res.writeHead(200,{"content-type":"text/html"});
            res.write(`File rename success .`);
            res.end();
        }


    }
})

server.listen(3007,()=>{
    console.log(`Server is running at the port 3007 .....`)
})


