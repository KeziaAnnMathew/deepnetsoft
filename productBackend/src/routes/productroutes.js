const express = require('express');
const productRouter=express.Router();
const jwt=require('jsonwebtoken')
const productdata= require('../models/productmodel')
function router(){
    productRouter.post('/addproduct',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        console.log(req.body)
        var product= {
            name:req.body.item.name,
            price:req.body.item.price,
            quantity:req.body.item.quantity,
            category:req.body.item.category,
          
        }
        var productItem= productdata(product);
        productItem.save();
    });
    productRouter.get('/getproducts',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        productdata.find()
        .then(function(products){
            res.send(products)
        })
        
    });
   return productRouter;
}




module.exports = router;