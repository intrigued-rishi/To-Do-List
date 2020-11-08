const list=require('../model/model');
//function for adding task to database and rendering
module.exports.add=function(req,res){
    list.create(req.body,function(err,newEntry){
         if(err){
             return;
         }
         console.log(newEntry);
    });
     res.redirect('back');
};
//function for deleting contact
module.exports.del=function(req,res){
    list.findByIdAndDelete(req.body.data,(err)=>{
         if(err){
             console.log(err);
             return;
         }
         console.log("Deleted!");
    });
    res.redirect('back');
};