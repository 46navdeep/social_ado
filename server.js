var express = require('express');
var app = express();


app.get('/',function(req,res){
  res.send("Hey Ya I am the first GET OF SOCIAL_ADO");
})

app.listen(3000,function(req,res){
  console.log("Server running at port 3000");
})
