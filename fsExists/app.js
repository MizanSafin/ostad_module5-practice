const http = require("http");
const fs = require("fs");


const server = http.createServer((req,res)=>{
    /*
    //Sync fsExists:
    if(req.url === "/"){
       let result =  fs.existsSync("safinj.ts");
       if(result){
           res.end(`File exist .`)
       }else{
           res.end(`File doesn,t exists .`)
       }
    }
     */
    //Async fs exist:
    fs.exists("safin.js",(result)=>{
        if(result){
            res.end(`File exist .`)
        }else{
            res.end(`File doesn,t exist .`)
        }
    })
})

server.listen(5005,()=>{
    console.log(`Server is running at the port 5005.....`)
})