
var express = require('express');
var app = express();

app.get('/hello',function(req,res){
    res.sendFile('index.html',{root:'/Users/saira/Documents/Web/sample_aws_project'})
    res.json("Hello")
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
