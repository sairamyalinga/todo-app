
var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', function(req,res){
  res.sendFile('index.html',{root:'/Users/saira/Documents/Web/sample_aws_project'})
})

app.post("/", function(req,res){
  var Name =  req.body.Fullname;
  var Uni = req.body.University;
  res.json({FullName: Name, University: Uni})
})
app.get('/hello',function(req,res){    
    res.json("Hello")
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
