const express=require('express');
const router=express.Router();
const mainController=require('../controller/main.js');
const edit=require('../controller/editContact');
const list=require('../model/model');
router.get('/',mainController.home);
router.post('/addTask',edit.add);
router.post('/delTask',edit.del);

module.exports=router;