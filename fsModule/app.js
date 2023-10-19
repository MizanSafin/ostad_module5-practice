const http = require("http");
const fs = require("fs");


const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        fs.readFile("./index.html","utf8",(err,data)=>{
            if(err){
                res.status(401).json({success:false,msg:"Data absent"})
            }else{
                res.writeHead(200,{"content-type":"text/html"});
                res.write(data);
                res.end()
            }
        })
    }
    if(req.url === "/contact"){
        let data = fs.readFileSync("./contact.html","utf8");
        res.writeHead(200,{"content-type":"text/html"});
        res.write(data);
        res.end()
    }
})

server.listen(4500,()=>{
    console.log(`Server is listening at the port 4500`)
})