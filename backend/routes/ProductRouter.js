const ensureAuthenticated=require('../Middlewares/Auth');
const router=require('express').Router();
router.get('/',ensureAuthenticated,(req,res)=>{
  console.log('-----loggedinuser----',req.user);
  res.status(200).json([
 { 
  name:"mobile",
  price:50000
 },
 {
  name:"tv",
  price:15000
 }
  ])
});
module.exports=router;