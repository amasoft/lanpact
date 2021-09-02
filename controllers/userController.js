const fs=require('fs');
const User = require('./../model/usersmodel');
const users=require('./../model/usersmodel')
const catchAsync=require('./../utils/catchAsync');

// 
// exports.getAllUsers=(req,res)=>{
//   res.status(500).json({
// status:'erro',
// message:'This route is not yet define'
//   });
// }
exports.getAllUsers=catchAsync(async(req,res)=>{
  const users=await User.find();
  res.status(200).json({
status:'sucess',
results:users.length,
data:{
  users
}
  });
})
exports.getUser=(req,res)=>{
  res.status(500).json({
status:'erro',
message:'This route is not yet define'
  });
}



exports.creatUser=async(req,res)=>{
  try{
  const newUser=await User.create(req.body)
 res.status(201).json({
status:"success",
data:{
users:newUser
}

})
  }catch(err){
    //here think of the possible expected error
    res.status(400).json({
      status:'fail',
      message:err   
    })
  }
};

exports.updateUser=(req,res)=>{
  res.status(500).json({
status:'erro',
message:'This route is not yet define'
  });
}

exports.deleteUser=(req,res)=>{
  res.status(500).json({
status:'erro',
message:'This route is not yet define'
  });
}