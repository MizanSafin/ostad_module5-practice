const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){

        /*
        //Asynchronous file write:

       fs.unlink("safin.html",(err)=>{
           if(err){
               res.writeHead(200,{"content-type":"text/html"});
               res.write(`File delete fail .`);
               res.end();
           }else{
               res.writeHead(200,{"content-type":"text/html"});
               res.write(`File delete success .`);
               res.end();
           }
       })

        */
      //synchronous File write:
      let err =  fs.unlinkSync("app.js");
      if(err){
          res.writeHead(200,{"content-type":"text/html"});
          res.write(`File delete fail .`);
          res.end();
      }else{
          res.writeHead(200,{"content-type":"text/html"});
          res.write(`File delete success .`);
          res.end();
      }



    }
})

server.listen(3009,()=>{
    console.log(`Server is running at the port 3009 .....`)
})


