var express=require('express');
var router=express.Router();
var categoryrouter=require('./categories/categoryroutes');
var postrouter=require('./posts/postroutes');
var userrouter=require('./users/userroutes');
router.use('/category',categoryrouter);
router.use('/posts',postrouter);
router.use('/users',userrouter);
module.exports=router;