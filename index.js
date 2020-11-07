const express=require('express');
const port=8000;
const server=express();
server.set('view engine','ejs');
server.set('views',__dirname+'/views');
const db=require('./config/config');
server.use(express.urlencoded());
server.use(express.static(__dirname+'/assets'));
server.use(require('./router/root'));
server.listen(port,(err)=>{
    if(err){
        console.error("Error!");
        return;
    }
    console.log("Server is running");
});