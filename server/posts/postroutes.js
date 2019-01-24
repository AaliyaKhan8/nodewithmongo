var express=require('express');
var route=express.Router();
var controller=require('./postcontroller');
route.get('/posts',function(req,res){
    controller.getAllPosts(req,res)
})
route.post('/posts',function(req,res){
    controller.addPosts(req,res);
})
route.get('/posts/:id',function(req,res){
    controller.getPost(req,res)
})
module.exports=route;