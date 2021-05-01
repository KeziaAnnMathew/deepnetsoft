const express = require('express');
const signRouter=express.Router();
const jwt=require('jsonwebtoken')
const Userdata= require('../models/usermodel')
function router(){
   signRouter.post('/validateuser',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        let userdataname= req.body.user.uname;
        let userdatapassword=req.body.user.password;
        Userdata.findOne({username:userdataname,password:userdatapassword},(err,doc)=>{
            if(!doc){
                res.send(doc);
               }    
            else{
                let payload={subject:userdataname+userdatapassword}
                let token=jwt.sign(payload,'secretKey')
                res.send({doc:doc,token:token})
               }
                
                
    })
   });    
   return signRouter;
}




module.exports = router;