// NPM required for app
var path=require("path");

// Exports routes for html files to the server
module.exports=function(app){
    app.get("/survey",function(req,res){
        res.sendFile(path.join(__dirname,"/../public/survey.html"));
    });
    app.get("*",function(req,res){
        res.sendFile(path.join(__dirname,"/../public/home.html"));
    });    
};