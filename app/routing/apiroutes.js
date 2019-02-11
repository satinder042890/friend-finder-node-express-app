// required friends array stored in friends file
const friends=require("../data/friends.js");

// Exports get and post routes
module.exports=function(app){
    // get route that displays friends array
    app.get("/api/friends",function(req,res){
        return res.json(friends);
    });

    // post route that grab the data coming from survey file , Match those data with frieds array and send back the matching character
    app.post("/api/friends",function(req,res){
        var friend=req.body;
        var match={
            name:"",
            photo:"",
            scoreDiff:0
        }
        var difference;
        for(var i=0 ; i<friends.length; i++){
            var currentFriend=friends[i];
            difference=0;
            for(var j=0; j<currentFriend.scores.length; j++){
                difference+= Math.abs(currentFriend.scores[j] - parseInt(friend.scores[j]));
            }
            console.log("difference = "+difference);

            if(match.scoreDiff < difference){
                match.name=currentFriend.name;
                match.photo=currentFriend.photo;
                match.scoreDiff=difference;
            }
        }   
        console.log(match);
        friends.push(friend);
        res.json(match);
    });
};

