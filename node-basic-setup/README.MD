# run file in local 
node index.js

# package,json
all dependency details

# express
node js framework, we can do bifg task on small code with express

# node js
everthing is a module like function var etc.    

# type of module 
++++++++## 1- filebase module  (needed download like expresss)

++++++++## 2- build in  (not needed download like fs (file system,path,os))
  => read a file with normal and sync
                const fs = require("fs");

                fs.readFile("./sample.txt",(err,data)=>{
                if(err){
                    throw err;
                }
                console.log(data)
                })


                    => use utf-8 for read normal text 
                                fs.readFile("./sample.txt","utf-8",(err,data)=>{

 => write a file with normal and async 





3- thired party(like pokemon)


## nodemon : for use direct reflect in terminal not run again again node index.js run

=> restart nodemon enter rs
=>nodemon watching js,mjs,json means if anyone is changes changes dedected on termianl



## make a server 

1- const http = require("http")

        http.createServer((req,res,next)=>(
            res.end("working ")  //http://localhost:4000  you can see message res.end on screen
        ));


    first parameter: request
    second para....:response
    next: a callbackfunction

2- listen server     

        server.listen(4000,"localhost",()=>{
        console.log(" server is working http://localhost:4000")
        })

##  Smart way we provide hostname and port as a var 

        const PORT = 4000;
        const hostname= "localhost"

        const server =  http.createServer((req,res,next)=>(
        res.end("working ")
        ));

        server.listen(PORT,hostname,()=>{
        console.log(`server is working http://${hostname}:${PORT}`)
        })

=> port 80 is use not path only show localhost ;   


## depoly

=> add on package.json 
     "start":"node index.js",
=> host on heroku  ::: https://signup.heroku.com/   


$ cd my-project/
$ git init
$ heroku git:remote -a nodejs-ashishyadav

$ git add .
$ git commit -am "make it better"
$ git push heroku master
