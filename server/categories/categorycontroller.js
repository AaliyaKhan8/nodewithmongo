var model=require('./categorymodel');

exports.addCategories=function(req,res){
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