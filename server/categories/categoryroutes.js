var express=require('express');
var route=express.Router();
var controller=require('./categorycontroller');
route.post('/category',function(req,res){
    controller.addCategories(req,res);
})
module.exports=route;