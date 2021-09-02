exports.home=(req,res)=>{
  res.sendFile(__dirname +'/index.html');
  console.log("welcome to my app")
}