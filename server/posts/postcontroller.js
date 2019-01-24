var model=require('./postmodel');

exports.getAllPosts=function(req,res){
   var promise= model.find({})
         .populate('postedBy')
         .exec()
         promise.then(function(data){
             res.send(data)
         },function(err){
             res.send(err)
         })
}
exports.addPosts=function(req,res){
    model.create(req.body,function(err,doc){
        if(err)
        {
            res.send(err);
        }
        else{
            res.send(doc);
        }
    })
}

exports.getPost=function(req,res){
   var promise= model.findById(req.params.id)
                    .populate('postedBy category')
                    .exec();
   promise.then(function(data){
        res.send(data)   
   },function(err){

   })
}