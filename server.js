var express=require("express");
var app=express();
// var path=require("path");
var PORT=process.env.PORT||3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

require("./app/routing/apiroutes.js")(app);
require("./app/routing/htmlroutes.js")(app);

app.listen(PORT,function(){
    console.log("App listening on port "+PORT);
});