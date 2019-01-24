var express=require('express');
var route=express.Router();

var usrcontroller=require('./usercontroller');
route.get('/users',function(req,res){
    usrcontroller.getAllUsers(req,res)
})
route.post('/new',function(req,res){
    console.log("new",req.body);
    usrcontroller.createUsers(req,res)
})
route.use('*',function(err,req,res,next){
    throw new Error("operation not allowed")
})
module.exports=route;