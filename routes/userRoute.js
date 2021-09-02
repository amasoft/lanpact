const express=require('express');
const userController=require('./../controllers/userController');
const homeController=require('./../controllers/homecontroller');
const authController=require('./../controllers/authController');

// router.post('/signup', function(req, res){s
//   authController.signup
// });
const router=express.Router()

router.post('/signup',authController.signup);
router.post('/login',authController.login);
    // "express-validator": "^6.12.1",
router.get('/home',homeController.home)
//users route
router.route('/')
.get(userController.getAllUsers) 
.post(userController.creatUser)
router.route('/:id')
.get(userController.getUser) 
.patch(userController.updateUser)
.delete(userController.deleteUser)
module.exports=router;

