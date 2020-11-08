const mongoose=require('mongoose');
//creating the Schema
const listSchema=new mongoose.Schema({
         title:{
             type:String,
             required:true
         },
         date:{
             type:String,  
             required:true
         },
         category:{
             type:String,
             required:true
         }
});
const list = mongoose.model("List",listSchema);
module.exports = list;