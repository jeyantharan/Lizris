const express=require("express");
var router=express.Router();
const productModel = require('../model/productModel');


router.get('/get-product',(req,res)=>{
    productModel.find()
    .then(product=>res.json(product))
    .catch(err =>res.status(400).json("error : "+err))
})

router.post('/create-product',(req,res)=>{

    // const {name,discription,prize,offer,offerPrize}=req.body;
    // const newProduct = new productModel({
    //     name,discription,prize,offer,offerPrize
    // })
    const off = req.body.offer ; 
    if(off ===true){
    const newProduct = new productModel({
            name:req.body.name,
            discription:req.body.discription,
            price:req.body.price,
            offer:req.body.offer,
            offerPrice:req.body.offerPrice
        })

        console.log(req.body);

    newProduct.save()
    .then(product => res.json("new product added...."))
    .catch(err => res.status(400).json("error : "+err))

    }else{
        const newProduct = new productModel({
            name:req.body.name,
            discription:req.body.discription,
            price:req.body.price,
            offer:req.body.offer,
            
        })

        console.log(req.body);

    newProduct.save()
    .then(product => res.json("new product added...."))
    .catch(err => res.status(400).json("error : "+err))
    }
})



router.put('/update-product/:id',(req,res)=>{
    // let product = productModel.findOne({id:req.params.id})
    // productModel.findByIdAndUpdate(req.params.id,{$set:req.body})
    // .then(product => res.json(" product updated...."))
    // .catch(err => res.status(400).json("error : "+err))

    // console.log(product);

    
    try{
        const id=req.params.id;
        const name=req.body.name;
        const discription=req.body.discription;
        const price=req.body.price;
        const offer=req.body.offer;
        const offerPrice=req.body.offerPrice;
        
    
      if(offer === true){
        productModel.findByIdAndUpdate(id,{name:name,discription:discription,price:price,offer:offer,offerPrice:offerPrice},function(err,response){
            if(err)
            res.send(err);
            else
            res.send("updated....");
        });
    }else{
        productModel.findByIdAndUpdate(id,{name:name,discription:discription,price:price,offer:offer,offerPrice:0},function(err,response){
            if(err)
            res.send(err);
            else
            res.send("updated....");
        });
    }
        
    }
    catch{
        return res.status(500).json({msg:err.message})
    }
    

})


router.delete('/delete-product/:id',(req,res)=>{
    let product = productModel.findById(req.params.id)
    productModel.findByIdAndDelete(req.params.id)
    .then(product => res.json(" product deleted...."))
    .catch(err => res.status(400).json("error : "+err))

   
})


module.exports = router ;