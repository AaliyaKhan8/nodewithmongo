var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/db");
var userschema=new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});
var model=mongoose.model('users',userschema);
// model.create({
//     name:'user1',
//     password:'password1'
// });

module.exports=model;