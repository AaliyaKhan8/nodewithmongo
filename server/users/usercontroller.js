var model=require('./usermodel');

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
exports.createUsers=function(req,res){
    model.create(req.body,function(err,docs){
        if(err)
        {
            res.send(err)
        }
        else
        {
            res.send(docs)
        }
    });
}