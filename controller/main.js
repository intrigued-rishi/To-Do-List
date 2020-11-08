const list= require('../model/model');   //importing the to-do-list collection from database
module.exports.home=function(req,res){
    list.find({},(err,data)=>{
        if(err){
            return;
        }
        res.render('index',{toDolist:data});
    });
}