var express=require('express');
var app=express();
var middleware=require('./middleware/middleware')(app);
var apirouter=require('./api');

app.use('/api',apirouter);
// app.use('*',function(req,res,next){
//     next(new Error("invalid request"))
// })
app.listen(3000);