//NPM needed for the app
var express=require("express");

// Sets up the Express App
var app=express();
var PORT=process.env.PORT||3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Links to the routing files 
require("./app/routing/apiroutes.js")(app);
require("./app/routing/htmlroutes.js")(app);

// Starts the server to begin listening
app.listen(PORT,function(){
    console.log("App listening on port "+PORT);
});