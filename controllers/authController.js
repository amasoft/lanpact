const jwt=require('jsonwebtoken');

const User=require('./../model/usersmodel');

const catchAsync=require('./../utils/catchAsync');
const AppError=require('./../utils/appError')

const signToken=id=>{
  return jwt.sign({id},process.env.JWT_SECRET,{
    expiresIn:process.env.JWT_EXPIRES_IN
});
}


exports.signup=catchAsync(async(req, res,next)=>{
 //creates users with all data from the body
//  const newUser=await User.create(req.body);
//let select the part we need to avoid user putting unwanted data 
//like specification of roles as admin


const newUser=await User.create({
name:req.body.name,
email:req.body.email,
password:req.body.password,
passwordConfirm:req.body.passwordConfirm
});


// const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET,{
//   expiresIn:process.env.JWT_EXPIRES_IN
// })
const token=signToken(newUser._id)
 res.status(201).json({
  status:"success",
  token,
  data:{
    user:newUser
  }
  //    // "validator": "^10.11.0"

// res.send(req.body);
// console.log(req.body);
});
});

//login
exports.login=catchAsync(async(req,res,next)=>{
  const {email,password}=req.body;
  //is same as down
  // const email=req.body.email;
  // const email=req.body.email;

// 1) check if email and password exist
if(!email || !password){
  // video 129,07:upwords 
  return next(new AppError['Please provide email and password'],404)
}

// 2check if user exists &&password is coreect
// const user =User.findOne({email:email});//email=email
const user =await User.findOne({email}).select("+password");//email=email
//if everything is ok...send token to client
// const correct =await User.correctPassword(password,user.password);
// since correct variable depends on user returned data to work if it fails c
//corect will not work therefor let move it down
// here user .correctpassword was used b/c the metho correcpassword 
//is instance method and user is a result of queryin usermodels...if revers it tros an err
if(!user || !(await user.correctPassword(password,user.password)) ){
  return next(new AppError('Incorrect Email and password',401))
}
console.log(user)
const token=signToken(user._id);
res.status(200).json({
  status:'success from here',
  token
});
});
