const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/sample",{useNewUrlParser:true}).then(()=>{
    console.log("connected to mongoDb")
}).catch((err)=>{
    console.log(err)
})

// Schema
const studentSchema = new mongoose.Schema({
name:String,
workout:Boolean,
height:Number
})

// Modal

            // const studentModal =new  mongoose.model("student",studentSchema)
            // const studentData  = async()=>{
            //     const ss = new studentModal({
            //         name:"ashish",
            //         workout:true,
            //         height:10
                
            //     })
                
            //     await ss.save();
            // }
            // studentData();


// modal create best method

                // const studentModal =new  mongoose.model("student",studentSchema)
                // const studentData  = async()=>{
                //     const ss =  await studentModal.create({
                //         name:"ashish",
                //         workout:true,
                //         height:10
                //     })
                    
                // }
                // studentData();


//  find method 



        // const studentModal =new  mongoose.model("student",studentSchema)
        // const studentData  = async()=>{
        //     const ss =  await studentModal.find();
        //     console.log(ss)
            
        // }
        // studentData();

// find method operator


const studentModal =new  mongoose.model("student",studentSchema)
const studentData  = async()=>{
    const ss =  await studentModal.find({height:{$eq:10}});
    console.log(ss)
    
}
studentData();
