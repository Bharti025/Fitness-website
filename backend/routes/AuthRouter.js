const {signup,login} = require('../controller/Authcontroller');
const {signupValidation,loginValidation}=require('../Middlewares/AuthValidation')
const router =require('express').Router();
// router.post('/login',(req,res)=>{
//     res.send('login success');
// });
router.post('/signup',signupValidation,signup);
router.post('/login',loginValidation,login);
module.exports=router;
