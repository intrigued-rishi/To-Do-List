const express=require('express');
const router=express.Router();
const mainController=require('../controller/main');
const edit=require('../controller/editContact');
const list=require('../model/model');
router.get('/',mainController.home);  //home page
router.post('/addTask',edit.add);     //add task
router.post('/delTask',edit.del);     //delete task

module.exports=router;