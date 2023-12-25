const fs = require("fs");
const os = require("os")
const pokemon = require("pokemon")


// ###############################1 read file ##################################

// fs.readFile("./sample.txt","utf-8",(err,data)=>{
// if(err){
//     throw err;
// }
// console.log(data)
// })

// console.log("first")


// ###############################2 Sync  ##################################


// const a = fs.readFileSync("./sample.txt","utf-8");

// console.log(a);
// console.log("it will all after sync")


// ############################### Makeing file   ##################################

// const a = "making a new file ";

// fs.writeFile("./newFile.txt",a,()=>{
//     console.log("file crreated")
// })


// ############################### os   ##################################


// console.log(os.totalmem())



// ############################### pokemon   ##################################

// console.log(pokemon.all())


// ############################### NodeMon   ##################################

// console.log(pokemon.all())

// ############################### make a server   ##################################

const http = require("http");

const PORT = 4000;
const hostname= "localhost"

const server =  http.createServer((req,res,next)=>{
if(req.url === "/"){
    res.end("<h1>Home</h1>")
}
if(req.url === "/about"){
    res.end("<h1>about</h1>")
}

else{
    res.end("<h1>Page not found</h1>")
}
// res.end("working ")
});

server.listen(PORT,hostname,()=>{
   console.log(`server is working http://${hostname}:${PORT}`)
})



