const list= require('../model/model');
module.exports.home=function(req,res){
    list.find({},(err,data)=>{
        if(err){
            return;
        }
        res.render('index',{toDolist:data,color:c});
    });
}