var model=require('./usermodel');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');


exports.getAllUsers = function(req,res){
    model.find({},function(err,docs){
        if(err){
            res.json("err");
        }
        else{
            res.json(docs);
        }
    })  
}
exports.createUsers=function(req,res,next){
    model.create(req.body,function(err,docs){
       if(err){
           next(err);
       }
       else{
        res.json({status: "success", message: "User added successfully!!!", data: null});
       }
    });
}

exports.authenticate = function(req,res,next){
    model.findOne({email:req.body.email},function(err,userinfo){

        if(err){
            next(err);
        }
        else{
           if( bcrypt.compareSync(userinfo.password,req.body.password)){
               const token = jwt.sign({id:userinfo._id},req.app.get('secretKey'), { expiresIn: '1h' })
               res.json("sent"+token)
           }
           else{
               res.send("error")
           }
        }
    })
}

