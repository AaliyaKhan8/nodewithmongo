var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/db");
var postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    }
});

var model=mongoose.model('post',postSchema);
module.exports=model;