const { strict } = require('assert');
const mongoose=require('mongoose');
const listSchema=new mongoose.Schema({
         title:{
             type:String,
             required:true
         },
         date:{
             type:Date,  
             required:true
         },
         category:{
             type:String,
             required:true
         }
});
const list = mongoose.model("List",listSchema);
module.exports = list;