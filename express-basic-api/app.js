const express = require("express")
const mongoose = require("mongoose")
const app = express();

mongoose.connect("mongodb://localhost:27017/sampleDemo").then(()=>{
    console.log("connected with mongoDb")
})
.catch((err)=>{
    console.log(err)
})
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())
// make a schema 

const productSchema = mongoose.Schema({
    name:String,
    description:String,
    price:Number
})


// make modal or collection 
const Product = new mongoose.model("Product",productSchema);


// Create product
app.post("/api/v1/product/new",async (req,res)=>{
  await  Product.create(req.body);
  res.status(200).json({
    success:true,
    Product
  })
})


// read product

app.get("/api/v1/products",async (req,res)=>{
    const products = await Product.find();
    res.status(201).json({
        success:true,
        products
      })
  })

//  update product

app.put("/api/v1/product/:id",async (req,res)=>{
    let  product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,
    {   new:true,
        useFindAndModify:false,
        runValidator:true})

    res.status(201).json({
        success:true,
        product
      })
  })

  //  delete product

app.delete("/api/v1/product/:id",async (req,res)=>{
    let  product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }
    product = await product.remove()

    res.status(201).json({
        success:true,
        message:"product deleted"
      })
  })




app.listen(4000,()=>{
    console.log("server is working http://localhost:4000")
})