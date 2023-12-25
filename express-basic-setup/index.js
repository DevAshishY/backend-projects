const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")

const router = require("./userRoutes");


const app =express();
const port = 4000;

app.use(bodyParser.urlencoded()) 
app.use(express.json())
app.use(router);


app.get("/",(req,res)=>{
   
    res.sendFile(path.join(__dirname+"/index.html"))
})



// app.post("/api/v1/login",(req,res)=>{
//     res.send(`<h1>Done mr.${req.body.name}</h1>`)
//     console.log(req.body) 
// })

app.listen(port,()=>{
    console.log(`serveris working ${port}`);
})