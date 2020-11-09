const express=require('express');
const port=8000;
const server=express();
server.set('view engine','ejs');
server.set('views',__dirname+'/views');
const expressLayouts= require('express-ejs-layouts');
server.use(expressLayouts);           //layout format
server.set('layout extractScripts',true);     // script tags for layout
server.set('layout extractStyles',true);      // css tags for layout
server.set('layout','layouts/layout.ejs');
const db=require('./config/config');   //connecting to database
server.use(express.urlencoded());      //middleware for parsing the incoming data
server.use(express.static(__dirname+'/assets'));  //routing static files
server.use(require('./router/root'));    //all path routing
server.listen(port,(err)=>{               //listening the server
    if(err){
        console.error("Error!");
        return;
    }
    console.log(`Server is running at port ${port}`);
});