const count  = require('console');
const exp = require('constants');
const { RSA_NO_PADDING } = require('constants');
const express=require('express');
const fs=require('fs');
const morgan=require('morgan');
// const tourRouter=require('./routes/tourRoutes')
const userRouter=require('./routes/userRoute')
const app=express();
// console.log(process.env.NODE_ENV)
//we can use this condition  to perform several operation or 
//or action base on development or production
// if(process.env.NODE_ENV==='development'){
//using morgan
// app.use(morgan('dev'));
//GET /api/v1/tours 200 44.300 ms - 8836...is called a logger
// in this section of if this logger can only be displayed 
//when we are in development eviromnt...npm run start:dev 
//console.log(process.env.NODE_ENV)...this prints out the logger
//}
//middleware is used to 
app.use(express.json());//req
// app.use(express.static(`${__dirname}/public`))//for accessing a static file
// app.use((req,res,next)=>{
//   console.log("hello frommiddleware");
//   next();

// })

// app.use((req,res,next)=>{
//   // new Date().toISOString()
//   req.requestTime=new Date().toISOString();
//   // console.log("hello frommiddleware");
//   next();
// res.sendFile(__dirname + '/index.html');
// })
// app.use('/api/v1/user',tourRouter);
// app.get('/homee',function(req,res) {
// });
app.use('/api/v1/users',userRouter);
//start server
module.exports=app;