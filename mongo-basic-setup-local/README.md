# mongoDB topic : mogodb cell ,compass, mongoose

# install
=> mongodb download and install path will be "C:\Program Files\MongoDB\Server\6.0\bin" after set path on "envirment variable"
=> mongosh shell  ,cur the download and paste on cr drive and set path on "envirment variable"
=> need to menstion both on system global varible for all user access 
=> after restrt system mongodb service by default startrd
=> so open mongosh shell and type your commanms


# mongosh command 

=> show dbs : for showing databse 
=> use cscorner (now check show dbs but it is not showing because collection not created )
=> create collection : db.createCollection("students")
=> enter data in collection : db.students.insertOne({"rollno":1,"name":"ashish"}) // for oneobject

=> enter data in collection : db.students.insertMany([{"rollno":1,"name":"ashish"},{"rollno":1,"name":"alok"},{"rollno":1,"name":"mukesh"},{"rollno":1,"name":"jai"},{"rollno":1,"name":"vikas"}]) // for multiple object

=> you can also serch by key name 
db.students.find({"name":"ashish"})

=> if we have multiple data we can use limit 
db.students.find({"name":"ashish"}).limit(1);

=> if need first in multiple  
db.students.findOne({"name":"ashish"})

=> if need first  
db.students.findOne()

=> if need find all  
db.students.find()




=> now check show dbs : you can find your database
=> show collections: show particular databse collection
=> show collection preety format :db.students.find().pretty() {preety for format otherwise use only find}




=> it will install on c drive co copy path and paste on enviremnt varibale as a new variable

#mongodb : use BSON (binary json) but it show json like

## update data 

=> use doller $ sign for operator 

=======for update one
=> db.students.updateOne({name:"ashish"},{$set:{name:"ashish yadav"}})

=======for update many
=> db.students.updateMany({name:"ashish"},{$set:{name:"ashish yadav"}})

## Delete 
===== one delete 
=>  db.students.deleteOne({name:"ashish"})

===== many delete (find object and all delete)
=>  db.students.deleteOne({name:"ashish"})

===== many delete ( all delete neeed blank object)
=>  db.students.deleteOne({})



## Drop 

=> drop collection : db.students.drop()
=> drop database:db.dropDatabase()



## install mongoose 

 npm i mongoose (npm package it is help for connecting with node js)

 =>basic connection and return a promise 

            const mongoose = require("mongoose");
            mongoose.connect("mongodb://localhost:27017/sample").then(()=>{
                console.log("connected to mongoDb")
            }).catch((err)=>{
                console.log(err)
            })

 ## note:  
 syntex use two object after port :{useNewUrlParser:true,useUnifiedTypology:true}
 exapmple : mongoose.connect("mongodb://localhost:27017",{useNewUrlParser:true,useUnifiedTypology:true}).then    

  these two things in object use deprecated currenturl parser  


  ## on mongose needed modal and Schema

 // schema 
       const studentSchema = new mongoose.Schema({
        name:String,
        workout:Boolean,
        height:Number
        })

## // Modal : create a async function and call it last

const studentModal =new  mongoose.model("student",studentSchema)
const studentData  = async()=>{
    const ss = new studentModal({
        name:"ashish",
        workout:true,
        height:10
    
    })
    
    await ss.save();
}
studentData();



## // modal create best method
const studentModal =new  mongoose.model("student",studentSchema)
const studentData  = async()=>{
    const ss =  await studentModal.create({
        name:"ashish",
        workout:true,
        height:10
    })
    
}
studentData();


<!-- find mathod -->
const studentModal =new  mongoose.model("student",studentSchema)
const studentData  = async()=>{
    const ss =  await studentModal.find();
    console.log(ss)
    
}
studentData();

<!-- find method use eq -->
const studentModal =new  mongoose.model("student",studentSchema)
const studentData  = async()=>{
    const ss =  await studentModal.find({height:{$eq:10}});
    console.log(ss)
    
}
studentData();

# main find method eq,gt,gte,lt,lte,in,nin