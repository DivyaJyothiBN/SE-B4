var  express = require('express');
var loginRouter = express.Router();

loginRouter.post('/login/:id',(req,res,next) => {
     var pg = require('pg');

     var pgClient  = new pg.Client({
        //host:'',
        port:'5432',
        user:'divya',
        password:'divya',
        database:'TMS',
        ssl:true
    });
    console.log("connected!!");
//    var connectionString = "postgres://postgres:5432/TMS";
    
  //  var pgClient = new pg.Client(connectionString);
  return new Promise((resolve, reject) => {
    pgClient.connect()
    .then(() => {
  //  var input= document.getElementById("in1").value;
   var query = pgClient.query("SELECT USN from Stu_Per_Data ")
   .then( res => {
    console.log(query);
    console.log(req.params.id);
    res.send().status(200);
    console.log("Here");
});

module.exports = loginRouter;