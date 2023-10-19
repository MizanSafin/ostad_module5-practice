const http = require("http");
const URL = require("url");
const server = http.createServer((req,res)=>{
      let myUrl = `http://rabbil.com/blogs.html?year=2020&month=july`;
      let myUrlObj = URL.parse(myUrl,true);

      let hostName = myUrlObj.host;
      let pathName = myUrlObj.pathname;
      let searchName = myUrlObj.search;

      if(req.url === "/"){
          res.writeHead(200,{"content-type":"text/html"})
          res.write(`<h2 style="color: forestgreen">Hostname : ${hostName} . pathName : ${pathName} . searchName : ${searchName} </h2>`);
          res.end();
      }

})


server.listen(5004,()=>{
    console.log(`Server is running ....`)
})