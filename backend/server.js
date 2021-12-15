const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');

const productRoute = require('./routes/productRoute');

const URI="mongodb+srv://Jeyantharan:JeyanthPavi2425@cluster0.ddxxb.mongodb.net/Lizris?retryWrites=true&w=majority";
mongoose.connect(URI,err=>{
    if(err) throw err;
    console.log('connected to the mongoodb');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/product',productRoute)

app.listen(port,(err)=>{
    if (err) throw err;
    console.log("we are live on 5000");
})