var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/db');
var categoryschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
});
var model=mongoose.model('category',categoryschema);
module.exports=model;