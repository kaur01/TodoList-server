 var express = require("express");
 var app = express();
 let arr = [];
var bodyParser = require("body-parser");
app.use(bodyParser.json());

 app.get('/getData',function(req, res){
   res.send(arr);
 });

 app.put('/changeEdit',function(req,res){
   my_obj = req.body;
   arr[my_obj.index].value = my_obj.value;
   res.send(arr[my_obj.index]);
 });

 app.put('/changeCheck',function(req,res){
   my_obj = req.body;
   x = my_obj.index;
   console.log(x);
   arr[x].ischecked = !arr[x].ischecked;
   res.send(arr[x]);
 });

 app.post('/setData', function(req, res){
 console.log(req.body);
 let obj = req.body;
 arr.push(obj);
 console.log(arr);
    res.send({message: "Thanks for sending data"});
 });


   app.delete('/deleteData',function(req,res){
    let index = req.body;
    my_obj = index;
    x = my_obj.index;
    arr.splice(x,1);
    console.log(arr);
     res.send({message: "Thanks Data has been deleted"});


  });

console.log("Started server")
 app.listen(8080);
