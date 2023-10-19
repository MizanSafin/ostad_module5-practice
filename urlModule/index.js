const http = require("http");
const server = http.createServer((req,res)=>{
  if(req.url === "/"){
      res.writeHead(200,{"content-type": "text/html"});
      res.write(`<h2 style="color: forestgreen"> This is Home Page</h2>`);
      res.end();
  }
})

server.listen(3004,()=>{
    console.log(`Server is running ........`)
})