const mongoose=require('mongoose');
const app=require('./app')
let server = require('http').Server(app);
const  dotenv=require('dotenv')
// const path  = require('./app')
dotenv.config({path:'./config.env'})

//connect to database
const DB=process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB,{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true,
useFindAndModify:false
} 
).then(con=>{
  console.log(con.connection)
  console.log('DB CONNECTION SUCCESFULL')
})
const port = process.env.PORT || 8080

// const port= process.env.port  || 8000;
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });

  server.listen(port,()=>{
  console.log(`App runnning on port ${port}`)
})