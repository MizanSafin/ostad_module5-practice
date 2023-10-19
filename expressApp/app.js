

// let names = ["22","33","44","55"];
//
// let [a,b,c,d] =  names.map(num=> +num);
// console.log(a,b,c,d);


const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send(`<h3>Hello express World . </h3>`)
});
app.get("/api",(req,res)=>{
    res.status(401).end(`status unAutho .....`)
})
app.post("/api/people",(req,res)=>{


    res.send(`Hello world`)
})
app.listen(5001,()=>{
    console.log(`Server is running at the port 5001 ....`)
})







