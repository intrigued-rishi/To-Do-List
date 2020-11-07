const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/List',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('Database established');
}).catch(()=>{
    console.error("Error in establishing database");
});
