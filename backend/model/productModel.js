const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
    },
    discription:{
        type:String
    },
    price:{
        type:Number
    },
    offer:{
        type:Boolean
    },
    offerPrice:{
        type:Number,
        required:function(){
           return this.offer === true
        },
    }
       
},{
    timestamps:true
})


var productModel=mongoose.model('product',productSchema);
module.exports=productModel;